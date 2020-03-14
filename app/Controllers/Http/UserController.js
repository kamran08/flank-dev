  
  /* eslint-disable camelcase */
/* eslint-disable eqeqeq */ 
'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use('App/Models/User')
const Legend = use('App/Models/Legend')
const Review = use('App/Models/Review')
const SchoolCoach = use('App/Models/SchoolCoach')
const Product = use('App/Models/Product')
const Database = use('Database')
const Hash = use('Hash')
const uniqid = require('uniqid');
const axios = require('axios')
const Mail = use('Mail')
/**
 * Resourceful controller for interacting with users
 */
class UserController {
  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return 'Nazmul Chowdhury'
  }

  /**
   * Render a form to be used for creating a new user.
   * GET users/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {

  }

  /**
   * Create/save a new user.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    const formInfo = request.all()
    delete formInfo.password_confirmation
    const data = await User.create(formInfo)

    if(formInfo.packType == 1){
      let user = await auth.query().attempt(formInfo.email, formInfo.password)
      return user
    }
   
      const ledata = {
        user_id: data.id,
        name: data.firstName+' '+data.lastName
    }
    let legend = await Legend.create(ledata);
    let user = await auth.query().attempt(formInfo.email, formInfo.password)
    return response.status(200).json({
     user:user,
     legend:legend
    })
  }

  async userLogin ({ request, response, auth, session }) {
    const data = request.all()
    let user = await User.query().where('email', data.email).first()
    user = JSON.parse(JSON.stringify(user))
    if (user == null) {
      return response.status(401).json({
        'message': 'Invalid email! Please try again.'
      })
    }

    try {
      let user = await auth.query().attempt(data.email, data.password)
      return User.query().with('legend').where('id',user.id).first();
    } catch (e) {
      return response.status(401).json({
        'message': "Password didn't match!!! Please try again."
      })
    }
  }

  /**
   * Display a single user. 
   * GET users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async showReview ({ params, request, response, auth }) {
    let page = request.input('page') ? request.input('page') : 1
    let str = request.input('str') ? request.input('str') : ''
    let type = request.input('type') ? request.input('type') : 'legend'
    let sort = request.input('sort') ? request.input('sort') : ''
    let user_id = -1

    try {
      let user = await auth.getUser()
      user_id = user.id
    } catch (error) {
      console.log('I am in catch')
    }
    let mdata = Review.query().where('reviwer_id', params.id)
      .with('legend')
      .with('product')
      .with('school')
      .with('coach')
      .with('reviwer', (builder) => builder.withCount('reviews as totalreviewbyuser'))
      .with('imosall', (builder) => {
        builder.where('user_id', user_id)
      })
      .with('images')






    if (str) {
      mdata.where('content', 'LIKE', '%' + str + '%')
    }
    if (sort) {
      mdata.orderBy('rating', sort)
    } else {
      mdata.orderBy('id', 'desc')
    }
    let data = await mdata.orderBy('id', 'desc')
      .paginate(page, 5)

    data = data.toJSON()
    let tempData = JSON.parse(JSON.stringify(data))

    for (let r of tempData.data) {
      if (r.imosall == null) {
        r.imosall = {
          'id': 0,
          'review_id': 0,
          'cool': 0,
          'funny': 0,
          'useful': 0
        }
      }

    }

    return tempData
  }
  async show ({ params, request, response, view }) {
    let userData = await User.query()
      .where('id', params.id)
      // .with('reviews')
      .with('reviews', (builder) => {
        builder.limit(3)
      })
      .with('reviews.legend')
      .with('reviews.product')
      .with('reviews.school')
      .with('reviews.coach')
      .with('reviews.images')
      .with('imosCount')
      .withCount('reviews')
    // .with('ratinginfo', (builder) => { 
    //   builder.where('rating', 5)
    // })
      .first()
    const reviewRatings = await Database.raw('SELECT rating,COUNT(rating) as total FROM `reviews` WHERE `reviwer_id`= ? GROUP by rating ORDER by rating ASC', [params.id])

    let ratingD = []
    for (let i = 0; i < 5; i++) {
      let ob = {
        rating: (i + 1),
        padding: 0,
        total: 0
      }
      for (let d of reviewRatings[0]) {
        if (ob.rating == d.rating) {
          ob.total = d.total
        }
      }
      ratingD.push(ob)
    }
    const maxv = Math.max.apply(Math, ratingD.map(function (d) { return d.total }))
    for (let d of ratingD) {
      d.padding = parseInt((50 * d.total) / maxv)
    }

    if (userData) {
      userData = JSON.parse(JSON.stringify(userData))
      if (userData.imosCount === null) {
        userData.imosCount = {
          'cool': 0,
          'funny': 0,
          'useful': 0
        }
      }
      return {
        user: userData,
        reviewRatings: ratingD
      }
    } else {
      return response.status(404).json({
        'message': 'User not found!.'
      })
    }
  }

  /**
   * Render a form to update an existing user.
   * GET users/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update user details.
   * PUT or PATCH users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response, auth }) {
    let data = request.all()
    return await User.query().where('id', params.id).update(data)


  }
  async updateEmail ({ params, request, response, auth }) {
    const data = request.all()
    // let user_id = 0
    // try {
    //   user = await auth.getUser()
    //   user_id = user.id
    // } catch (error) {
    //   return response.status(401).json({
    //     'message': 'You are not authorized!'
    //   })
    // }
    const user_id = await auth.user.id
    if (user_id != data.id) {
      return response.status(401).json({
        'message': 'You are not authorized!'
      })
    }
    delete data.confirm_email
    delete data.old_password
    let edata = await User.query().where('id', user_id).update(data)
    return edata
  }
  async updatePassword ({ params, request, response, auth }) {
    const data = request.all()
    // let user_id = 0
    // try {
    //   user = await auth.getUser()
    //   user_id = user.id
    // } catch (error) {
    //   return response.status(401).json({
    //     'message': 'You are not authorized!'
    //   })
    // }
    data.password = await Hash.make(data.password)
    const user_id = await auth.user.id
    if (user_id != data.id) {
      return response.status(401).json({
        'message': 'You are not authorized!'
      })
    }
    delete data.confirm_password
    delete data.old_password
    let pdata = await User.query().where('id', user_id).update(data)
    return pdata
  }
  async getAllUserProduct ({ params, request, response, auth }) {
    let page = request.input('page') ? request.input('page') : 1
    let data = await Product.query()
      .where('user_id', params.id)
      .with('avgRating')
      .withCount('reviewsall')
      .paginate(page, 3)
    return data
  }

  /**
   * Delete a user with id.
   * DELETE users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }

  async logout ({ auth, session }) {
    try {
      session.clear()
      await auth.logout()
      return
    } catch (e) {
      return false
    }
  }

  async sendInvitation ({ request, response ,auth}) {
    let data = request.all()
    let user = await auth.getUser();
    
    await Mail.send('emails.invitation', data, (message) => {
      message
        .to(data.mail)
        .from(user.email, `${user.firstName} ${user.lastName}`)
        .subject('Invitation')
    })
    if(data.mail1){
      await Mail.send('emails.invitation', data, (message) => {
        message
          .to(data.mail1)
          .from(user.email, `${user.firstName} ${user.lastName}`)
          .subject('Invitation')
      })
    }
    if(data.mail2){
      await Mail.send('emails.invitation', data, (message) => {
        message
          .to(data.mail2)
          .from(user.email, `${user.firstName} ${user.lastName}`)
          .subject('Invitation')
      })
    }
    if(data.mail3){
      await Mail.send('emails.invitation', data, (message) => {
        message
          .to(data.mail3)
          .from(user.email, `${user.firstName} ${user.lastName}`)
          .subject('Invitation')
      })
    }
    return  response.status(200).json({
        'message': 'mail send Successfully!'
    })
  }
  async sendResetLinkEmail ({ request, response }) {
    console.log("ami asi re")
    let email = request.all().email
    let user = await User.query().where('email', email).first()
    // eslint-disable-next-line eqeqeq
    if (user == null) {
      return response.status(422).json({
        message: "404 Email doesn't exist!."
      })
    }
    let token = uniqid('token-')
    await User.query().where('email', email).update({ 'passwordToken': token })
    user.passwordToken = token
    let  data = {
      firstName:user.firstName,
      lastName:user.lastName,
      passwordToken:token
    }
    console.log(data)
    await Mail.send('emails.passwordreset', data, (message) => {
      message
        .to(email)
        .from('Support@goflank.com', 'Support @ goflank')
        .subject('Reset Password')
    })
    return  response.status(200).json({
        'message': 'Password reset link sent to your email!'
    })
  }

  async matchPasswordLink ({ request, response }) {
    let passwordToken = request.all().passwordToken
    let isTokenFound = await User.query().where('passwordToken',passwordToken).first()
    if(!isTokenFound){
        return  response.status(401).json({
          message: "token expired!"
        })
    }
    return  response.status(200).json({
      data: isTokenFound
    })
  }
  async resetPassword({ request, response }) {
    let data = request.all();
    data.password = await Hash.make(data.password)
    let flag = await User.query().where("id",data.id).update({
      password:data.password,
      passwordToken:'',
    });

    if(!flag){
       
        return  response.status(401).json({
          message: "Something went wrong!"
        })
    }

    return  response.status(200).json({
      message: "Password change successfully!!"
    })

}

  async initdata ({ request, response, auth }) {
    try {
      const user = await auth.getUser()
      
      const legend = await User.query().with('legend').where('id',user.id).first();
      return {
        user: legend
      }
    } catch (error) {
        return false
    }
  }
  async updateProfileImage ({ request, response, auth }) {
    const user_id = await auth.user().id
    const profilePic = request.file('file', {
      types: ['png', 'jpg', 'jpeg'],
      size: '2mb'
    })
    const name = `${new Date().getTime()}` + '.' + profilePic._subtype
    // UPLOAD THE IMAGE TO UPLOAD FOLDER
    await profilePic.move(Helpers.publicPath('uploads'), {
      name: name
    })
    if (!profilePic.moved()) {
      return profilePic.error()
    }
    const file = `/uploads/${name}`
    let data = {
      img: file
    }

    await User.query().where('id', user_id).update(data)

    return response.status(200).json({
      msg: 'Image has been uploaded successfully!',
      file: `/uploads/${name}`
    })
  }

  async FoulMethods(){

    let dataObj = {
      'code' : '',
      'client_id' : '359194021269-7oesnmcnemu54uh7mvsbcrvml80r6ogl.apps.googleusercontent.com' ,
      'client_secret' : 'OvS-acgHB6d53-t4c_Yn4wY9' ,
      'redirect_uri' : 'http://localhost/contact/',
      'grant_type' : 'authorization_code'
    }
    const res = await axios({
                  method: 'post',
                  url: 'https://accounts.google.com/o/oauth2/token',
                  data: dataObj,
                  headers: { 'Content-Type': 'application/json' },
                })
      return res.data;
  }
    async getSchoolCoachByhighRated ({ request, response, auth }) {

      return await SchoolCoach.query()
        .with('allreviewLimit').with('school')
        .with('topAtrribute.info')
        .withCount('allreview as allreview')
       .orderBy('avg_rating', 'desc').limit(3).fetch()
        // .whereHas('school', (builder) => {
        //   builder.where('city', 'LIKE', '%' + place + '%')
        // })
      // return await SchoolCoach.query().orderBy('avg_rating', 'desc').limit(3).fetch()

    }
    async getSchoolCoachByMostRated ({ request, response, auth }) {

      return await SchoolCoach.query()
        .with('allreviewLimit').with('school')
        .with('topAtrribute.info')
        .withCount('allreview as allreview')
       .orderBy('totalRating', 'desc').limit(4).fetch()
        // .whereHas('school', (builder) => {
        //   builder.where('city', 'LIKE', '%' + place + '%')
        // })
      // return await SchoolCoach.query().orderBy('avg_rating', 'desc').limit(3).fetch()

    }
 
    async sendlegalData ({ request, response, auth }) {

      let data = request.all()
      // return data
      if (data.email) {
        await Mail.send('emails.legal', data, (message) => {
          message
            .to('goflank@yahoo.com')
            .from(data.email, `Legal inquiries`)
            .subject('Legal inquiries')
        })
      }
      else{
         return response.status(403).json({
           'msg':"given email is invalid"
         })
      }



    }
}

module.exports = UserController
