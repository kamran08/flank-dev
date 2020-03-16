/* eslint-disable no-return-await */
/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
/* eslint-disable quotes */
'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Legend = use('App/Models/Legend')
const Database = use('Database')
const User = use('App/Models/User')
const Review  = use('App/Models/Review')
const LegendImage = use('App/Models/LegendImage')
const LegendSchedule = use('App/Models/LegendSchedule')
const LegendBussniessInfo = use('App/Models/LegendBussniessInfo')
const Attribute = use('App/Models/Attribute')
const BusniessHour = use('App/Models/BusniessHour')

/**
 * Resourceful controller for interacting with legends
 */
class LegendController {
  /**
   * Show a list of all legends.
   * GET legends
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const data = await Legend.all()
    return data
  }

  /**
   * Render a form to be used for creating a new legend.
   * GET legends/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) { 
  }

  /**
   * Create/save a new legend.
   * POST legends
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async step1Submit ({ request, response,auth }) {
    const formInfo = request.all()
    delete formInfo.password_confirmation
    const data = await User.create(formInfo)
    const ledata = {
      user_id: data.id,
  }
  let legend = await Legend.create(ledata);
  let user = await auth.query().attempt(formInfo.email, formInfo.password)
  return response.status(200).json({
    user:user,
    legend:legend
  })
  }
  async step2Submit ({ request, response }) {
    let data = request.all();
    let ob ={
      firstName:data.firstName,
      lastName:data.lastName,
      id:data.user_id
    }
    await User.query().where('id',ob.id).update(ob);
    delete data.firstName;
    delete data.lastName;
    data.name = ob.firstName+' '+ob.lastName;
   return await  Legend.query().where('id',data.id).update(data)
   
  }
  async step3Submit ({ request, response }) {
    let data = request.all();
    
   return await  Legend.query().where('id',data.id).update(data)
  }
  async store ({ request, response }) {
  }

  /**
   * Display a single legend.
   * GET legends/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    await Legend.query().where('id',params.id).update({
      views:  Database.raw(" views + 1 "),
    })
    const legendData = await Legend.query()
      .where('id', params.id)
      .withCount('totalReview')
      .with('firstImage')
      .with('question.answers') 
      .with('topAtrribute.info' )
      .with('question.user', (builder) => builder.withCount('reviews as totalreviewbyuser'))
      .first()
    const averageRating = await Database.raw('SELECT cast(AVG(rating) as decimal(10,2)) AS averageRating FROM `reviews` WHERE `reviewFor` = ?', [params.id])
    const healthPulse = await Database.raw('select SUM(good) as GoodCount , SUM(bad) as BadCount FROM `pulses` WHERE `legend_id` = ?', [params.id])
    const AttributeInfo = await Attribute.all()

    if (legendData) {
      const userData = await User.query()
        .where('id', legendData.user_id)
        .first()
      return response.status(200).json({
        legend: legendData,
        user: userData,
        averageRating: averageRating[0][0].averageRating,
        healthPulse: healthPulse[0][0],
        AttributeInfo: AttributeInfo

        // atrrtributepoint: atrrtributepointData
      })
    } else {
      return response.status(404).json({
        'message': 'User not found!.'
      })
    }
  }
  async getLegendId ({ params, request, response, view }) {
    return await Legend.query()
      .where('user_id', params.id)
      .first()
  }

  /**
   * Render a form to update an existing legend.
   * GET legends/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update legend details.
   * PUT or PATCH legends/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const data = request.all()
    const busniessHours = data.businessHour
    delete data.businessHour
    await BusniessHour.query().where('legend_id', params.id).delete()
    await BusniessHour.createMany(busniessHours)

    return await Legend.query().where('id', params.id).update(data)
  }

  /**
   * Delete a legend with id.
   * DELETE legends/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }

  async uploadLegendPhotos ({ request, auth }) {
    let data = request.all()
    const user_id = await auth.user.id
    const legend = await Legend.find(user_id)
    let uploadList = []
    for (let i of data.uploadList) {
      let ob = {
        url: i.url,
        legend_id: legend.id
      }
      uploadList.push(ob) 
    }
    await LegendImage.query().where('legend_id', legend.id).delete() 
    return await LegendImage.createMany(uploadList)
  }

  async getAdditionlegendInfo ({ response, params }) { 
    let legendData = await Legend.query()
      .where('id', params.id)
      .with('legendimages')
    // .with('questions')
      .with('questions', (builder) => builder.limit(2))
      .withCount('questions as totalQuestion')
      .with('questions.user')
      .with('hours')
      .first()

      let rawps = await Review.query().where('reviewFor', params.id).where('review_type','legend').where('is_active', 1).count();
      rawps = JSON.parse(JSON.stringify(rawps))
      let ps = rawps[0]['count(*)'];
      
      let healthSoreIndex = await Review.query().where('reviewFor', params.id).where('review_type','legend')
        .select(Database.raw('cast(AVG(healthyIndex) as decimal(10,2)) AS healthyIndex'), Database.raw('cast(AVG(harmfulIndex) as decimal(10,2)) AS harmfulIndex'))
        .first();
      
      let asss = await Database.raw('SELECT (SELECT COUNT(id)  FROM `reviews` WHERE `healthyIndex` < `harmfulIndex` and `reviewFor` = ? and review_type = "legend" ) as NegativeReview,(SELECT count(id)  FROM `reviews`  where reviewFor = ? and review_type = "legend" ) as TotalReview , (SELECT COUNT(id)  FROM `reviews` WHERE `healthyIndex` >= `harmfulIndex` and `reviewFor` = ? and review_type = "legend") as PositiveReview ,  (cast(AVG(healthyIndex) as decimal(10,2))) AS avgHealthIndex , (cast(AVG(harmfulIndex) as decimal(10,2))) AS avgHarmfulIndex   From `reviews` WHERE   `reviewFor` = ? and review_type = "legend" ' , [ params.id,params.id,params.id,params.id])
  
      
  
      // let streak = await this.getStreak(params.id)
      let allreview = await Database.raw('SELECT * FROM `reviews` WHERE `healthyIndex` >= `harmfulIndex` and `reviewFor` = ? and review_type = "legend" ORDER BY id DESC', [params.id])
  
      // let allreview = await Review.query().where('reviewFor', params.id).where('healthyIndex', '>=', 'harmfulIndex').orderBy('id', 'asc').fetch()
  
      let data = allreview[0]
  
      let tempData = []
      for (let i of data) {
        tempData.push(i.id)
      }
      console.log(tempData)
      let streak = this.countNumberOfPositiveReview(tempData)
  
  
  
      // let last10 = await Database.raw('SELECT COUNT(id) as NegativeReview ,(SELECT COUNT(id)  FROM `reviews` WHERE `healthyIndex` >= `harmfulIndex` and `reviewFor` = ? ORDER BY id DESC LIMIT 10) as PositiveReview From `reviews` WHERE `healthyIndex` < `harmfulIndex` and `reviewFor` = ? ORDER BY id DESC LIMIT 10 ', [params.id, params.id])
  
      let last10 = this.countLast10(data)
  
      let healthSore = ((asss[0][0].avgHealthIndex - asss[0][0].avgHarmfulIndex) * 6.66)
      let PCT = ((asss[0][0].PositiveReview * 100) /  asss[0][0].TotalReview)
      PCT = PCT.toFixed(2)
      return response.status(200).json({
        
        healthSoreIndex: healthSoreIndex,
        metrice: asss[0][0],
        streak: streak,
        ps: ps,
        PCT: PCT,
        legendData: legendData,
        last10: last10,
        healthSore: healthSore,
      })

   
  }
  countNumberOfPositiveReview(arr) {

    const numbers = new Set(arr), counts = {};
    var max = 1;
    for (const num of numbers.values()) {
      // console.log(num)
      let counting = true, next = num + 1;
      numbers.delete(num);
      while (counting) {
        counting = false;
        while (numbers.has(next)) { numbers.delete(next++) }
        if (counts[next]) { counting = numbers.has(next += counts[next]) }
      }
      max = Math.max(counts[num] = next - num, max);
    }
    return max;
  }
  countLast10(arr) {

    let temp = 0
    let data = {
      PositiveReview: 0,
      NegativeReview: 0
    }

    for (let i of arr) {
      if (temp >= 10) {
        break
      } 

      if (i.healthyIndex >= i.harmfulIndex) {
        data.PositiveReview += 1
       
      }
      else {
        data.NegativeReview += 1
      }
      temp++
    }

    return data
  }
  async getTodayBussinessHour ({ response, params }) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var dd = new Date(Date.now())
    const today = days[dd.getDay()]
    let today_hour = dd.getHours()
    let bhours = await BusniessHour.query().where('legend_id', params.id).fetch()

    bhours = JSON.parse(JSON.stringify(bhours))
    let data = {}
    data.today = 0
    for (let d of bhours) {
      if (d.day == today) {
        data.today = 1
        data.day = d
        let time = d.time.split('-')
        time[0] = (time[0].charAt(6) == 'P') ? (parseInt(time[0].substr(0, 2)) + 12) : parseInt(time[0].substr(0, 2))
        time[1] = (time[1].charAt(6) == 'P') ? (parseInt(time[1].substr(0, 2)) + 12) : parseInt(time[1].substr(0, 2))
        if (today_hour > time[0] && today_hour < time[1]) data.open = true
        else data.open = false
      }
    }
    return data
  }
  async deleteImage ({ request, response, auth }) {
    const data = request.all()
    const user_id = await auth.user.id
    const legend_id = await Legend.query().where('user_id', user_id).first()
    const imageData = await LegendImage.query().where('id', data.id).first()
    if (legend_id.id != imageData.legend_id) {
      return response.status(401).json({
        'message': 'Your are not authorized!.'
      })
    }
    return await LegendImage.query().where('id', data.id).delete()
  }
   // storeLegendSchedule

  async storeLegendSchedule ({ request, response, auth }) {
    const data = request.all()
    
    return await LegendSchedule.create(data)
  }
  async showLegendBussniessInfo ({ request, params, auth }) {
    return await LegendBussniessInfo.query().where('legend_id',params.id).fetch()
  }

  

 
}

module.exports = LegendController
