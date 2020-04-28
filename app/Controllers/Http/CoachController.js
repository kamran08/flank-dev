'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const School = use('App/Models/School')
const TempSchoolCoach = use('App/Models/TempSchoolCoach')
const TempSchool = use('App/Models/TempSchool')
const SchoolCoach = use('App/Models/SchoolCoach')
const Attribute = use('App/Models/Attribute')
const ReviewImage = use('App/Models/ReviewImage')
const Review = use('App/Models/Review')
const ReviewAttribute = use('App/Models/ReviewAttribute')
const Mail = use('Mail')
const Database = use('Database')
/**
 * Resourceful controller for interacting with coaches
 */
class CoachController {
  /**
   * Show a list of all coaches.
   * GET coaches
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new coach.
   * GET coaches/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new coach.
   * POST coaches
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    let data = request.all()
    let name = data.name;
    delete data.name;
    data.isConfirmed = false;
    let school = await TempSchool.create(data)
    school = JSON.parse(JSON.stringify(school))
    let coachob = {
      'school_id': school.id,
      'name': name
    }
    data.name = name
    // sadek.hkm@gmail.com
      // await Mail.send('emails.coatch', data, (message) => {
      //   message
      //     .to('goflank@yahoo.com')
      //     .from('Support@goflank.com', `new mail`)
      //     .subject('Flank – Urgent New Coach/School')
      // })
    return await TempSchoolCoach.create(coachob)
  }
  // async store ({ request, response }) {

  //   let data = request.all()
  //   let name = data.name;
  //   delete data.name;
  //   data.isConfirmed = false;
  //   let school = await School.create(data)
  //   school = JSON.parse(JSON.stringify(school))
  //   let coachob = {
  //     'school_id': school.id,
  //     'name': name
  //   }
  //   // sadek.hkm@gmail.com
  //     await Mail.send('emails.coatch', data, (message) => {
  //       message
  //         .to('sadek.hkm@gmail.com')
  //         .from('Support@goflank.com', `new mail`)
  //         .subject('Flank – Urgent New Coach/School ')
  //     })
  //   return   await SchoolCoach.create(coachob)
  // }

  /**
   * Display a single coach.
   * GET coaches/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async coachesAddView ({ params, request, response, view }) {
    // return 1
    let data = await SchoolCoach.query().where('id', params.id).first()
    let ob={
      views: parseInt(data.views)+1
    }
    return await SchoolCoach.query().where('id', params.id).update(ob)

  }
  async show ({ params, request, response, view }) {
    const legendData = await SchoolCoach.query()
    .where('id', params.id)
    .withCount('allreview')
    .with('topAtrribute.info' )
    .with('school')
    .with('question.answers')
    .with('question.user')
    .with('question.user', (builder) => builder.withCount('reviews as totalreviewbyuser'))
    .with('avgRating')
   // .with('totalRating')
    .first()
  if (legendData) {
    return response.status(200).json({
      School: legendData

    })
  } else {
    return response.status(404).json({
      'message': 'Coach not found!.'
    })
  }
  }

  /**
   * Render a form to update an existing coach.
   * GET coaches/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update coach details.
   * PUT or PATCH coaches/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a coach with id.
   * DELETE coaches/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
  async getCoachTopReviews ({request, response, params }) { 
    let type = request.input('type') ? request.input('type') : 'school'
    let legendData = await Review.query()
      .where('reviewFor', params.id)
      .where('review_type', type)
      .with('reviwer')
      .orderBy('rating', 'DESC')
      .orderBy('id', 'DESC')
      .limit(3)
      .fetch()

    return legendData
  }
  async similar_coaches ({ params, request, response, view }) {
    const data = request.all()
    return await ProductQuestion.query()
      .where('product_id', data.product_id)
      .whereNot('id', data.question_id)
      .withCount('answers')
      .orderBy('id', 'desc')
      .paginate(1, 3)
  }
  async recentCitys ({ params, request, response, view }) {
    const data = request.all()
    return await School.query()
      .select( Database.raw('DISTINCT city'))
      .limit(5)
      .fetch()
  }
}

module.exports = CoachController
