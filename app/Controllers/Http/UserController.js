  
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
const Follow = use('App/Models/Follow')
const Database = use('Database')
const Hash = use('Hash')
const uniqid = require('uniqid');
const axios = require('axios')
const Mail = use('Mail')
const { validateAll } = use('Validator')
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
    // return formInfo
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
  async updateUserInformation ({ params, request, response, auth }) {
      let data = request.all()
      const user_id = await auth.user.id
      delete data.id
      return await User.query().where('id', user_id).update(data)
  }
  async updateUserPassword ({ params, request, response, auth }) {
      let data = request.all()
      const user_id = await auth.user.id
      if (!data.oldpassword || data.oldpassword == '' || data.oldpassword.trim()==''){
        return response.status(422).json({
          'message': 'Old Password Can not be empty!.'
        })
      }
     
     let newuser = await User.query().setVisible(['id', 'password']).where('id', user_id).first()
     const isSame = await Hash.verify(data.oldpassword, newuser.password)
        if (!isSame) {
          return response.status(422).json({
            'message': 'Old password is incorrect.',
          })
        }
      if (!data.password || data.password == '' || data.password.trim()==''){
        return response.status(401).json({
          'message': 'password not match .',
        })
      }
     
      let password = await Hash.make(data.password)
      if (data.id == user_id){
        let ob ={
          'password': password
        }
        return await User.query().where('id', user_id).update(ob)
      }
      else{
        return response.status(401).json({
          'message': 'Your are not authInticate user.'
        })
      }
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

      // return await SchoolCoach.query()
      //   .with('allreviewLimit')
      //   .with('school')
        
      //   .with('topAtrribute.info')
      //   .withCount('allreview as allreview')
      //  .orderBy('avg_rating', 'desc').limit(3).fetch()

        // .whereHas('school', (builder) => {
        //   builder.where('city', 'LIKE', '%' + place + '%')
        // })
      // return await SchoolCoach.query().orderBy('avg_rating', 'desc').limit(3).fetch()


      let one =  await SchoolCoach.query()
        .with('allreviewLimit').
         whereHas('school', (builder) => {
                 builder.where('sport', 'Baseball')
               }).with('school')
        .with('topAtrribute.info')
        .withCount('allreview as allreview')
        .orderBy('avg_rating', 'desc').first()
      let two =  await SchoolCoach.query()
        .with('allreviewLimit') .
        whereHas('school', (builder) => {
          builder.where('sport', 'Football')
        }).with('school')
        .with('topAtrribute.info')
        .withCount('allreview as allreview')
        .orderBy('avg_rating', 'desc').first()

      let three =  await SchoolCoach.query()
        .with('allreviewLimit').whereHas('school', (builder) => {
          builder.where('sport', "Women's Soccer")
        })
        .with('school')
        .with('topAtrribute.info')
        .withCount('allreview as allreview')
        .orderBy('avg_rating', 'desc').first()

      let four =  await SchoolCoach.query()
        .with('allreviewLimit').whereHas('school', (builder) => {
          builder.where('sport', "Men's Soccer")
        })
        .with('school')
        .with('topAtrribute.info')
        .withCount('allreview as allreview')
        .orderBy('avg_rating', 'desc').first()
        let alldata = []
        alldata.push(one)
        alldata.push(two)
        // if (three.)
        if (four.avg_rating > three.avg_rating){

          alldata.push(four)
        }
        else{
          alldata.push(three)
        }
        for (let d of alldata) {
          d.isSeeMore = false
          if (d.avgRating == null) {
            d.avgRating = {
              averageRating: 0
            };
          }
         
          let a = (d.averageHealthy) ? d.averageHealthy : 0;
          let b = (d.averageHarmful) ? d.averageHarmful : 0;
          d.healthScore = parseFloat((parseFloat(a).toFixed(2) - parseFloat(b).toFixed(2)) * 6.66).toFixed(2)
 
        }
 
        return alldata;

    }
    async getSchoolCoachByMostRated ({ request, response, auth }) {

      // let data = await SchoolCoach.query()
      //   .with('allreviewLimit').with('school')
      //   .with('topAtrribute.info')
      //   .withCount('allreview as allreview')
      //  .orderBy('totalRating', 'desc').limit(4).fetch()
      let data =[]
    
      let d1 = await SchoolCoach.query()
        .with('allreviewLimit').with('school')
        .with('topAtrribute.info')
        .withCount('allreview as allreview').where('avg_rating' >= 4).
        first()
      let d2 = await SchoolCoach.query()
        .with('allreviewLimit').with('school')
        .with('topAtrribute.info')
        .withCount('allreview as allreview').where('avg_rating' <= 3 && 'avg_rating'>2)
        .first()
      let d3 = await SchoolCoach.query()
        .with('allreviewLimit').with('school')
        .with('topAtrribute.info')
        .withCount('allreview as allreview').where('avg_rating' <= 2 && 'avg_rating'>1)
        .first()
      let d4 = await SchoolCoach.query()
        .with('allreviewLimit').with('school')
        .with('topAtrribute.info')
        .withCount('allreview as allreview').where('avg_rating',1)
        .first()
      if (d1){
        d1.trace = true
        data.push(d1)
      }
      else{
        data.push({trace:false})
      }
      if (d2){
        d2.trace = true
        data.push(d2)
      }
       else{
        data.push({trace:false})
      }
      if (d3){
        d3.trace = true
        data.push(d3)
      }
       else{
        data.push({trace:false})
      }
      if (d4){
        d4.trace = true

        data.push(d4)
      }
       else{
        data.push({trace:false})
      }

       data = JSON.parse(JSON.stringify(data))
       for (let d of data) {
         d.isSeeMore = false
         if (d.avgRating == null) {
           d.avgRating = {
             averageRating: 0
           };
         }
        
         let a = (d.averageHealthy) ? d.averageHealthy : 0;
         let b = (d.averageHarmful) ? d.averageHarmful : 0;
         d.healthScore = parseFloat((parseFloat(a).toFixed(2) - parseFloat(b).toFixed(2)) * 6.66).toFixed(2)

       }

       return data;
     
        // .whereHas('school', (builder) => {
        //   builder.where('city', 'LIKE', '%' + place + '%')
        // })
      // return await SchoolCoach.query().orderBy('avg_rating', 'desc').limit(3).fetch()

    }
 
   
    async sendlegalData ({ request, response, auth }) {

      let data = request.all()
           const rules = {
             email: "required|email",
           };
           const messages = {
             "email.required": "Email is required!",
             "email.email": "Email is invalid!",
           }
           const validation = await validateAll(data, rules, messages);
           if (validation.fails()) {
             return response.status(401).json({
               'msg': "Email is required or invalid"
             })
            //  return this.errorResponse(response, 401, validation.messages())
           }
      // return data
      if (data.email) {
        // goflank @yahoo.com
        await Mail.send('emails.legal', data, (message) => {
          message
            .to('goflank@yahoo.com')
            .from(data.email, `Legal Inquiries`)
            .subject('Flank – Urgent Legal Inquiry Request')
        })
      }
      else{
         return response.status(403).json({
           'msg':"given email is invalid"
         })
      }



    }
      // async tasting ({ request, response, auth }) {
      //       const rules = {
      //         email: "required|email",
      //       };
      //       const messages = {
      //          "email.required": "Email is required!",
      //          "email.email": "Email is invalid!",
      //       }
      //       const validation = await validateAll(data, rules, messages);
      //       if (validation.fails()) {
      //         return this.errorResponse(response, 401, validation.messages())
      //       }
      // }
     
     async sendreviewMessage ({ request, response, auth }) {
       let data = request.all()
            const rules = {
              email: "required|email",
            };
            const messages = {
              "email.required": "Email is required!",
              "email.email": "Email is invalid!",
            }
            const validation = await validateAll(data, rules, messages);
            if (validation.fails()) {
              return response.status(401).json({
                'msg': "Email is invalid!"
              })
              // return this.errorResponse(response, 401, validation.messages())
            }
        if (data.email) {
          await Mail.send('emails.messageFromReview', data, (message) => {
            message
            // goflank @yahoo.com
              .to('goflank@yahoo.com')
              .from(data.email, `New Email`)
              .subject(data.subject)
          })
        } else {
          return response.status(403).json({
            'msg': "given data is invalid"
          })
        }

     }
     async sendAccountCloseEmail ({ request, response, auth }) {
        let data = request.all()
        const user_id = await  auth.user.id
        if (data.taxt){
          if (!user_id){
              return response.status(403).json({
                  'msg': "Your are not valid User!!!"
              })
          }
          await User.query().where('id', user_id).delete()
          // session.clear()
          await auth.logout()
          await Mail.send('emails.accountCloser', data, (message) => {
            message
              .to('goflank@yahoo.com')
              .from('Support@goflank.com', `New Email`)
              .subject('Flank – Urgent Account Closure Request')
          })
           return response.status(200).json({
             'msg': "account deactivated!!!"
           })
          

        }
     }
     async createNewFollow ({ request, response, auth }) {
        let data = request.all()
        const user_id = await  auth.user.id
        let chaeck = await Follow.query().where('follower', user_id).where('following', data.following).first()
        if(chaeck){
           return response.status(401).json({
             'msg': "You Already Following!!"
           })
        }
        else{
          let ob={
              follower: user_id,
              following: data.following
          }
         return await Follow.create(ob)
        }


       
     }
     async createNewUnFollow ({ request, response, auth }) {
        let data = request.all()
        const user_id = await  auth.user.id
        if (data.following){

          return await Follow.query().where('follower', user_id).where('following', data.following).delete()
        }
        return await Follow.query().where('follower', user_id).where('following', data[0].following).delete()
     }

    
}

module.exports = UserController
