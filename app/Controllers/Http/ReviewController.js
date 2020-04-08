/* eslint-disable no-return-await */
/* eslint-disable camelcase */
/* eslint-disable eqeqeq */
'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Review = use('App/Models/Review')
const Reviewimo = use('App/Models/Reviewimo')
const Legend = use('App/Models/Legend')
const ReviewImage = use('App/Models/ReviewImage')
const ReviewAttribute = use('App/Models/ReviewAttribute')
const Attribute = use('App/Models/Attribute')
const SchoolCoach = use('App/Models/SchoolCoach')
const Helpers = use('Helpers')
const Mail = use('Mail')
const Database = use('Database')
/**
 * Resourceful controller for interacting with reviews
 */
class ReviewController {
  /**
   * Show a list of all reviews.
   * GET reviews
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new review.
   * GET reviews/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) { 
  }

  /**
   * Create/save a new review.
   * POST reviews
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    let data = request.all()
    const user_id = await auth.user.id
    data.reviwer_id = user_id
    let uploadList = []
    const AttributeInfoAll = data.AttributeInfo
    delete data.AttributeInfo

    const tempUpload = data.uploadList
    delete data.uploadList
    data.review_type = 'legend'
    const rdata = await Review.create(data)

    for (let i of tempUpload) {
      let ob = {
        url: i,
        review_id: rdata.id
      }
      uploadList.push(ob)
    }
    await ReviewImage.createMany(uploadList)
    let AttributeInfo = []
    for (let d of AttributeInfoAll) {
      if (d.isPositive == '0' || d.isPositive == '1') {
        let ob = {
          review_id: rdata.id,
          attribute_id: d.id,
          user_id: user_id,
          points: (d.isPositive == '0') ? (d.points * -1) : d.points

        }
        AttributeInfo.push(ob)
      }
    }

    await ReviewAttribute.createMany(AttributeInfo)
    return rdata
  }

  /**
   * Display a single review. 
   * GET reviews/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request\
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async getReviewInfo ({ request, auth, response, params }) {
    
    return await Review.query().where('id', params.id)
    .with('legend')
    .with('reviwer')
    .with('reviwer', (builder) => builder.withCount('reviews as totalreviewbyuser'))
    .with('coach').with('school').first()
  }
  async show ({ params, request, response, auth }) {
    let page = request.input('page') ? request.input('page') : 1
    let str = request.input('str') ? request.input('str') : ''
    let type = request.input('type') ? request.input('type') : 'legend'
    let sort = request.input('sort') ? request.input('sort') : ''
    let user_id = -1
    let user_id2 = -1

    try {
      let user = await auth.getUser()
      user_id = user.id
      user_id2 = auth.user.id
    } catch (error) {
      console.log('I am in catch')
    }
    let mdata = Review.query().where('reviewFor', params.id).where('review_type', type)
      .with('reviwer').withCount('follow').with('hasfollow', (builder) => {
        builder.where('follower', user_id2)
      })
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
  async getUserallReview ({ params, request, response, auth }) {
    let page = request.input('page') ? request.input('page') : 1

    let mdata = Review.query().where('reviwer_id', params.id)
      .with('legend')
      .with('product')
      .with('school')
      .with('coach')
      .with('reviwer', (builder) => builder.withCount('reviews as totalreviewbyuser'))
      .with('imos')
      .with('images')
    // if()
    let data = await mdata.orderBy('id', 'desc')
      .paginate(page, 3)

    data = data.toJSON()
    let tempData = JSON.parse(JSON.stringify(data))

    for (let r of tempData.data) {
      if (r.imos == null) {
        r.imos = {
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

  async SchoolCoachReviewShow ({ params, request, response, auth }) {
    let page = request.input('page') ? request.input('page') : 1
    let str = request.input('str') ? request.input('str') : ''
    let sort = request.input('sort') ? request.input('sort') : ''
    let user_id = -1

    try {
      let user = await auth.getUser()
      user_id = user.id
    } catch (error) {
      console.log('I am in catch')
    }
    let mdata = Review.query().where('school_id', params.id).where('review_type', 'school')
      .with('reviwer')
      .with('reviwer', (builder) => builder.withCount('reviews as totalreviewbyuser'))
      .with('imosall', (builder) => {
        builder.where('user_id', user_id)
      })
      .with('images')
      .with('reviewfor')

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
  async singleSchoolCoachReviewShow ({ params, request, response, auth }) {
    let page = request.input('page') ? request.input('page') : 1
    let str = request.input('str') ? request.input('str') : ''
    let coach = request.input('coach') ? request.input('coach') : 0
    let user_id = 0
    // let user
    // try {
    //   user = await auth.getUser()
    //   user_id = user.id
    // } catch (error) {
    //   //response.send('You are not logged in')
    // }

    let mdata = Review.query().where('reviewFor', params.id).where('review_type', 'school')
      .with('reviwer')
      .with('reviwer', (builder) => builder.withCount('reviews as totalreviewbyuser'))
      .with('imos')
      .with('images')

    if (user_id != 0) {
      mdata.with('imosall', (builder) => {
        builder.where('user_id', user_id)
      })
    }
    if (str) {
      mdata.where('content', 'LIKE', '%' + str + '%')
    }
    let data = await mdata.orderBy('id', 'desc')
      .paginate(page, 5)

    data = data.toJSON()
    let tempData = JSON.parse(JSON.stringify(data))

    for (let r of tempData.data) {
      if (r.imos == null) {
        r.imos = {
          'id': 0,
          'review_id': 0,
          'cool': 0,
          'funny': 0,
          'useful': 0
        }
      } else {
        if (r.imosall) {
          if (r.imosall.cool == 1) r.imos.acool = true
          if (r.imosall.funny == 1) r.imos.afunny = true
          if (r.imosall.useful == 1) r.imos.auseful = true
        }
      }
    }

    return tempData
  }

  async ProductReview ({ params, request, response, auth }) {
    let page = request.input('page') ? request.input('page') : 1
    let str = request.input('str') ? request.input('str') : ''
    let user_id = 0
    // let user
    // try {
    //   user = await auth.getUser()
    //   user_id = user.id
    // } catch (error) {
    //   //response.send('You are not logged in')
    // }

    let mdata = Review.query().where('reviewFor', params.id).where('review_type', 'product')
      .with('reviwer')
      .with('reviwer', (builder) => builder.withCount('reviews as totalreviewbyuser'))
      .with('imos')
      .with('images')
    if (user_id != 0) {
      mdata.with('imosall', (builder) => {
        builder.where('user_id', user_id)
      })
    }
    if (str) {
      mdata.where('content', 'LIKE', '%' + str + '%')
    }
    let data = await mdata.orderBy('id', 'desc')
      .paginate(page, 2)

    data = data.toJSON()
    let tempData = JSON.parse(JSON.stringify(data))

    for (let r of tempData.data) {
      if (r.imos == null) {
        r.imos = {
          'id': 0,
          'review_id': 0,
          'cool': 0,
          'funny': 0,
          'useful': 0
        }
      } else {
        if (r.imosall) {
          if (r.imosall.cool == 1) r.imos.acool = true
          if (r.imosall.funny == 1) r.imos.afunny = true
          if (r.imosall.useful == 1) r.imos.auseful = true
        }
      }
    }

    return tempData
  }
  async reviewOfTheDay ({ params, request, response, auth }) {
    let d = new Date()
    let monthNumber = d.getMonth() + 1
    monthNumber = ('0' + monthNumber).slice(-2)
    let dayNumber = d.getDate()
    dayNumber = ('0' + dayNumber).slice(-2)
    let year = d.getFullYear()
    let today = year + '-' + monthNumber + '-' + dayNumber
    let bestReview = await Review.query()

      .with('legend')
      .with('coach')
      .with('reviwer')
      .with('reviwer', (builder) => builder.withCount('reviews as totalreviewbyuser'))

      .with('images')
      .orderBy('totalimo', 'desc')
      .whereBetween('created_at', [today + ' 00:00:00', today + ' 23:59:59'])
      .first()
    if (!bestReview) {
      bestReview = await Review.query()

        .with('legend')
        .with('coach')
        .with('reviwer')
        .with('reviwer', (builder) => builder.withCount('reviews as totalreviewbyuser'))

        .with('images')
        .orderBy('totalimo', 'desc')

        .first()
    }
    return response.status(200).json({

      bestReview: bestReview
    })
  }

  /**
   * Render a form to update an existing review.
   * GET reviews/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update review details.
   * PUT or PATCH reviews/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a review with id.
   * DELETE reviews/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }

  async uploadReviewFile ({ request, response }) {
    const profilePic = request.file('file', {
      types: ['png', 'jpg', 'jpeg'],
      size: '2mb'
    })

    const name = `${new Date().getTime()}` + '.' + profilePic.subtype
    // UPLOAD THE IMAGE TO UPLOAD FOLDER
    await profilePic.move(Helpers.publicPath('uploads'), {
      name: name
    })
    if (!profilePic.moved()) {
      return profilePic.error()
    }

    return response.status(200).json({
      msg: 'Image has been uploaded successfully!',
      file: `/uploads/${name}`
    })
  }

  async stoteReviewImo ({ request, response, auth }) {
    let data = request.all()
    data.user_id = await auth.user.id
    await Reviewimo.findOrCreate(
      { review_id: data.review_id, user_id: data.user_id }

    )
    let key = data.key
    delete data.key
    if (key == 'cool') {
      await Review.query().where('id', data.review_id).update({ official: (Database.raw(`official + ${data['cool']}`)) })
      await Review.query().where('id', data.review_id).update({ totalimo: (Database.raw(`official + bravery +  distinguished `)) })
      return await Reviewimo.query().where('review_id', data.review_id).where('user_id', data.user_id).update({ cool: (Database.raw(`cool + ${data['cool']}`)) })
    } else if (key == 'funny') {
      await Review.query().where('id', data.review_id).update({ bravery: (Database.raw(`bravery + ${data['funny']}`)) })
      await Review.query().where('id', data.review_id).update({ totalimo: (Database.raw(`official + bravery +  distinguished `)) })
      return await Reviewimo.query().where('review_id', data.review_id).where('user_id', data.user_id).update({ funny: (Database.raw(`funny + ${data['funny']}`)) })
    }

    await Review.query().where('id', data.review_id).update({ distinguished: (Database.raw(`distinguished + ${data['useful']}`)) })
    await Review.query().where('id', data.review_id).update({ totalimo: (Database.raw(`official + bravery +  distinguished `)) })
    return await Reviewimo.query().where('review_id', data.review_id).where('user_id', data.user_id).update({ useful: (Database.raw(`useful + ${data['useful']}`)) })
  }
  async stoteProductReviewImo ({ request, response, auth }) {
    let data = request.all()
    data.user_id = await auth.user.id
    await Reviewimo.findOrCreate(
      { review_id: data.review_id, user_id: data.user_id }

    )

    return await Reviewimo.query().where('review_id', data.review_id).where('user_id', data.user_id).update(data)
  }
  async stoteCoachReviewImo ({ request, response, auth }) {
    let data = request.all()
    data.user_id = await auth.user.id
    await Reviewimo.findOrCreate(
      { review_id: data.review_id, user_id: data.user_id }

    )
    let key = data.key
    delete data.key
    if (key == 'cool') {
      await Review.query().where('id', data.review_id).update({ official: (Database.raw(`official + ${data['cool']}`)) })
      await Review.query().where('id', data.review_id).update({ totalimo: (Database.raw(`official + bravery +  distinguished `)) })
      return await Reviewimo.query().where('review_id', data.review_id).where('user_id', data.user_id).update({ cool: (Database.raw(`cool + ${data['cool']}`)) })
    } else if (key == 'funny') {
      await Review.query().where('id', data.review_id).update({ bravery: (Database.raw(`bravery + ${data['funny']}`)) })
      await Review.query().where('id', data.review_id).update({ totalimo: (Database.raw(`official + bravery +  distinguished `)) })
      return await Reviewimo.query().where('review_id', data.review_id).where('user_id', data.user_id).update({ funny: (Database.raw(`cool + ${data['funny']}`)) })
    }

    await Review.query().where('id', data.review_id).update({ distinguished: (Database.raw(`distinguished + ${data['useful']}`)) })
    await Review.query().where('id', data.review_id).update({ totalimo: (Database.raw(`official + bravery +  distinguished `)) })
    return await Reviewimo.query().where('review_id', data.review_id).where('user_id', data.user_id).update({ useful: (Database.raw(`cool + ${data['useful']}`)) })
  }
  async atrributeConteptData ({ params }) {
    return await Database
      .table('review_attributes')
      .select('attributes.content', 'attributes.points')
      .sum('review_attributes.points as totalPoints')
      .count('review_attributes.id as totalvotes')
      .innerJoin('reviews', function () {
        this
          .on('review_attributes.review_id', 'reviews.id')
      })
      .innerJoin('attributes', function () {
        this
          .on('review_attributes.attribute_id', 'attributes.id')
      })
      .where('reviews.reviewFor', params.id)
      .where('reviews.review_type', 'legend')
      .groupBy('attributes.content')
  }

  async coachatrributeConteptData ({ params }) {
    return await Database
      .table('review_attributes')
      .select('attributes.content', 'attributes.points')
      .sum('review_attributes.points as totalPoints')
      .count('review_attributes.id as totalvotes')
      .innerJoin('reviews', function () {
        this
          .on('review_attributes.review_id', 'reviews.id')
      })
      .innerJoin('attributes', function () {
        this
          .on('review_attributes.attribute_id', 'attributes.id')
      })
      .where('reviews.reviewFor', params.id)
      .where('reviews.review_type', 'school')
      .groupBy('attributes.content')
  }
  async test ({ request, response, auth }) {

    //  return await Database.raw("SELECT `imo` , COUNT(imo) as total FROM `reviewimos` GROUP by `imo`")
    // return await Review.query().select('imo').count('imo as total').groupBy('imo').orderBy('id')
    //  return await Review.query()
    //  .with('imos', (builder) => {
    //   builder.select('imo').count('imo as total')
    // })
    //  .fetch()

  //  return await Review.query()
  //  .with('imos')
  //  .fetch()
  }
  async getRecentReview ({ response, params }) {
    let data = await Review.query()
      .with('reviwer')
      .with('legend')
      .with('product')
      .with('school')
      .with('coach.allreview')
      .with('reviwer', (builder) => builder.withCount('reviews as totalreviewbyuser'))
      .with('imos')
      .with('images')
      .orderBy('id', 'desc')
      .limit(9)
      .fetch()
    data = data.toJSON()
    let tempData = JSON.parse(JSON.stringify(data))

    for (let r of tempData) {
      if (r.imos == null) {
        r.imos = {
          'id': 0,
          'review_id': 0,
          'cool': 0,
          'funny': 0,
          'useful': 0
        }
      } else {
        if (r.imosall) {
          if (r.imosall.cool == 1) r.imos.acool = true
          if (r.imosall.funny == 1) r.imos.afunny = true
          if (r.imosall.useful == 1) r.imos.auseful = true
        }
      }
    }

    return tempData
  }

  async getAllAttributes ({ request }) {
    let atIndex = request.input('atIndex') ? request.input('atIndex') : ''
    let data = Attribute.query()
    if (atIndex) {
      data.where('atIndex', atIndex)
    }
    let realData = await data.fetch()
    realData = JSON.parse(JSON.stringify(realData))
    for (let d of realData) {
      d.isSelected = false
    }
    return realData
  }

  async storeAttributes ({ request, auth, response }) {
    let AttributeInfo = []
    const user_id = await auth.user.id
    let AttributeInfoAll = request.all()
    const reviewinfo = await Review.query().where('id', AttributeInfoAll.review_id).first()

    // reviewinfo = JSON.parse(JSON.stringify(reviewinfo))

    let index = ''
    for (let d of AttributeInfoAll.data) {
      if (d.isSelected == true) {
        let ob = {
          review_id: AttributeInfoAll.review_id,
          attribute_id: d.id,
          reviewFor: reviewinfo.reviewFor,
          review_type: reviewinfo.review_type,
          user_id: user_id,
          points: d.points,
          atIndex: d.atIndex

        }
        index = d.atIndex
        AttributeInfo.push(ob)
      }
    }

    await ReviewAttribute.createMany(AttributeInfo)
    console.log(AttributeInfo.length)
    if (AttributeInfo.length > 0) {
      if (index == 'Healthy') await Database.raw('update `reviews` set `healthyIndex` = ?, `total` = ( healthyIndex - harmfulIndex ) where `id` = ?', [AttributeInfo.length, AttributeInfoAll.review_id])
      else await Database.raw('update `reviews` set `harmfulIndex` = ?, `total` = ( healthyIndex - harmfulIndex ) where `id` = ?', [AttributeInfo.length, AttributeInfoAll.review_id])
      if (reviewinfo.review_type == 'school') {
        let avg = await SchoolCoach.query().with('avgRating').where('id', reviewinfo.reviewFor).first()
        avg = JSON.parse(JSON.stringify(avg))
        await SchoolCoach.query().where('id', reviewinfo.reviewFor).update({
          avg_rating: avg.avgRating.averageRating,
          totalRating: avg.avgRating.totalRating,
          totalHarmful: avg.avgRating.totalHarmful,
          averageHealthy: avg.avgRating.averageHealthy,
          totalHealthy: avg.avgRating.totalHealthy,
          averageHarmful: avg.avgRating.averageHarmful

        })
      } else if (reviewinfo.review_type == 'legend') {
        let avg = await Legend.query().with('avgRating').where('id', reviewinfo.reviewFor).first()
        avg = JSON.parse(JSON.stringify(avg))
        console.log(avg)
        await Legend.query().where('id', reviewinfo.reviewFor).update({
          avg_rating: avg.avgRating.averageRating,
          totalRating: avg.avgRating.totalRating,
          totalHarmful: avg.avgRating.totalHarmful,
          averageHealthy: avg.avgRating.averageHealthy,
          totalHealthy: avg.avgRating.totalHealthy,
          averageHarmful: avg.avgRating.averageHarmful

        })
      }
    }

    return response.status(200).json({
      msg: 'Atrribute Created!!'

    })
  }
 
 
}

module.exports = ReviewController
