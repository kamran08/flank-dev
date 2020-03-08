/* eslint-disable no-return-await */
/* eslint-disable camelcase */
'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Answer = use('App/Models/Answer')
const Question = use('App/Models/Question')
const AnswerLike = use('App/Models/AnswerLike')
const Database = use('Database')
/**
 * Resourceful controller for interacting with answers
 */
class AnswerController {
  /**
   * Show a list of all answers.
   * GET answers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new answer.
   * GET answers/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new answer.
   * POST answers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    const user_id = await auth.user.id
    let data = request.all()
    data.user_id = user_id
    return await Answer.create(data)
  }
  

  /**
   * Display a single answer.
   * GET answers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Question.query()
      .where('id', params.id)
      .with('user')
      .with('coach.school')
      .with('legend')
      .with('allAnswers.user')
      .first()
  }


  /**
   * Render a form to update an existing answer.
   * GET answers/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update answer details.
   * PUT or PATCH answers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a answer with id.
   * DELETE answers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }

  async storeAnswerLike({ params, request, response ,auth}) {
    let data = request.all()
    

    
    try {
      data.user_id = await auth.user.id
    } catch (error) {
      return response.status(401).json({
        message:'Please login for further action!'
      })
   }

   let alike =  await AnswerLike.findOrCreate(
      { answer_id: data.answer_id, user_id: data.user_id }

    )

    await AnswerLike.query().where('id', alike.id).update({ helpful: data.helpful, not_helpful: data.not_helpful})
    const total = await Database.raw('SELECT SUM(helpful) as totoal_helpful , SUM(not_helpful) as total_not_helpful FROM `answer_likes` WHERE answer_id = ?', [data.answer_id])
    await Answer.query().where('id', data.answer_id).update({ helpful: total[0][0].totoal_helpful , not_helpful: total[0][0].total_not_helpful  })
    return  await Answer.query().where('id', data.answer_id).first()

  }
}

module.exports = AnswerController
