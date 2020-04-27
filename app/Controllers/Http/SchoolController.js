/* eslint-disable no-return-await */
/* eslint-disable camelcase */
/* eslint-disable eqeqeq */ 
'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const School = use('App/Models/School')
const SchoolCoach = use('App/Models/SchoolCoach')
const Attribute = use('App/Models/Attribute')
const Legend = use('App/Models/Legend')
const Place = use('App/Models/Place')
const ReviewImage = use('App/Models/ReviewImage')
const Review = use('App/Models/Review')
const TempSchoolCoachReview = use('App/Models/TempSchoolCoachReview')
const TempSchoolCoach = use('App/Models/TempSchoolCoach')
const ReviewAttribute = use('App/Models/ReviewAttribute')
const Mail = use('Mail')
const Database = use('Database')
/**
 * Resourceful controller for interacting with schools
 */
class SchoolController {
  /**
   * Show a list of all schools.
   * GET schools
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
     let tempCoach =
     [

   
    ]
    let i =1
    var start = new Date().getTime()
    for (let d of tempCoach) {
      // return tempCoach.length
      if (i == 7746) {
        break
      }
      i++
      
      let schoolData = {
        'logo': d['logo'],
        'schoolName': d['Name Of School'],
        'city': d['City'],
        'state': d['State'],
        'division': d['Division'],
        'sport': d['Sport'],
        'roster': d['roster'],
        'alumni': d['alumni'],
        'interestedAthletes': d['Interested Athletes'],
        'committedRecruit': d['Committed Recruit'],
        'placedAthletes': d['Placed Athletes'],
        'teamWebsite': d['Official Team Website']
      }
        
      // let schoolData = {
      //   'logo': null,
      //   'schoolName': d['Name Of School'],
      //   'city': d['City'],
      //   'state': d['State'],
      //   'division': d['Division'],
      //   'sport': d['Sport'],
      //   'roster': null,
      //   'alumni': null,
      //   'interestedAthletes': null,
      //   'committedRecruit': null,
      //   'placedAthletes': null,
      //   'teamWebsite': d['Official Team Website']
      // }

      let newSchoolData = await School.create(schoolData)
      let countVar = 0
      for (let dd in d) {
        countVar++
        if (countVar > 6) {
          if (d[dd] != "null" && d[dd] != "" && d[dd] != null) {
            let coachob = {
              'school_id': newSchoolData.id,
              'name': d[dd]
            }
            SchoolCoach.create(coachob)
          }
        }
        
      }
      
    }
    let str = 'done'
    return str
  }

  /**
   * Render a form to be used for creating a new school.
   * GET schools/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new school.
   * POST schools
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    let data = request.all()
    let name = data.name;
    
    let coachob = {
      'school_id': data.id,
      'name': name
    }
    // sadek.hkm@gmail.com
    // await Mail.send('emails.coatch', data, (message) => {
    //   message
    //     .to('goflank@yahoo.com')
    //     .from('Support@goflank.com', `new`)
    //     .subject('Flank – Urgent New Coach/School ')
    // })
    return   await SchoolCoach.create(coachob)
  }

  /**
   * Display a single school.
   * GET schools/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const legendData = await School.query()
      .where('id', params.id)
      .withCount('allreview')
      .with('coaches')
      .with('question.answers')
      .with('avgRating')
      .first()
    if (legendData) {
      return response.status(200).json({
        School: legendData

      })
    } else {
      return response.status(404).json({
        'message': 'School not found!.'
      })
    }
  }

  async getSchoolTopReviews ({request, response, params }) { 
    let legendData = await Review.query()
      .where('school_id', params.id)
      .where('review_type', 'school')
      .with('reviwer')
      .with('reviewfor')
      .orderBy('rating', 'DESC')
      .orderBy('id', 'DESC')
      .limit(3)
      .fetch()

    return legendData
  }

  async showSchoolCoach({ params, request, response, view }) {
    const AttributeInfo = await Attribute.all()
    const SchoolCoachData = await SchoolCoach.find(params.id)

    return response.status(200).json({
      SchoolCoachData: SchoolCoachData,
      AttributeInfo: AttributeInfo
    })
  }

  async storeSchoolCoachTeampReview({ request, response, auth }) {
    let data = request.all()
    let user_id = -1
    if (auth.user){
      user_id = await auth.user.id
      data.reviwer_id = user_id
    }
    // let uploadList = []
    const rdata = await TempSchoolCoachReview.create(data)
    let avg = await TempSchoolCoach.query().where('id', data.reviewFor).first()
     avg = JSON.parse(JSON.stringify(avg))
      if (data.rating >= 3) {
        avg.totalgood += 1
      } else {
        avg.totalbad += 1
      }
      await TempSchoolCoach.query().where('id', data.reviewFor).update({
        avg_rating: avg.avg_rating,
        totalgood: avg.totalgood,
        totalbad: avg.totalbad,
      })
      let d = await TempSchoolCoach.query().where('id', data.reviewFor).first()

      let obb={
        name: d.name
      }

      await Mail.send('emails.coatch', obb, (message) => {
        message
          .to('goflank@yahoo.com')
          .from('Support@goflank.com', `new mail`)
          .subject('Flank – Urgent New Coach/School')
      })


    return rdata
    
  }

  async storeSchoolCoachReview({ request, response, auth }) {
    let data = request.all()
    const user_id = await auth.user.id
    data.reviwer_id = user_id
    
    
    let uploadList = []
    //const AttributeInfoAll = data.AttributeInfo
    // delete data.AttributeInfo

    //const tempUpload = data.uploadList
    //delete data.uploadList
    const rdata = await Review.create(data)

    if(data.review_type == 'school'){

      let avg = await SchoolCoach.query().with('avgRating').where('id',data.reviewFor).first()
      avg = JSON.parse(JSON.stringify(avg))

      if(data.rating>=3){
         avg.totalgood+=1 
      }
      else{
          avg.totalbad+=1
      }
      await SchoolCoach.query().where('id',data.reviewFor).update({
        avg_rating:avg.avgRating.averageRating,
        totalRating:avg.avgRating.totalRating,
        totalHarmful:avg.avgRating.totalHarmful,
        averageHealthy:avg.avgRating.averageHealthy,
        totalHealthy:avg.avgRating.totalHealthy,
        averageHarmful:avg.avgRating.averageHarmful,
        totalgood:avg.totalgood,
        totalbad:avg.totalbad,
        
      })
     
    }
    if(data.review_type == 'legend'){

      let avg = await Legend.query().with('avgRating').where('id',data.reviewFor).first()
      avg = JSON.parse(JSON.stringify(avg))
       if(data.rating>=3){
         avg.totalgood+=1 
      }
      else{
          avg.totalbad+=1
      }
      await Legend.query().where('id',data.reviewFor).update({
        avg_rating:avg.avgRating.averageRating,
        totalRating:avg.avgRating.totalRating,
        totalHarmful:avg.avgRating.totalHarmful,
        averageHealthy:avg.avgRating.averageHealthy,
        totalHealthy:avg.avgRating.totalHealthy,
        averageHarmful:avg.avgRating.averageHarmful,
         totalgood:avg.totalgood,
        totalbad:avg.totalbad,
        
      })
     
    }
    // for (let i of tempUpload) {
    //   let ob = {
    //     url: i,
    //     review_id: rdata.id
    //   }
    //   uploadList.push(ob)
    // }
    //await ReviewImage.createMany(uploadList)

    return rdata
  }

  async storeSchoolCoache({ params, request, response, view }) {
    const data = request.all()
    return await SchoolCoach.create(data)
  }

  async getAdditionCoachInfo({ response, params }) {

    let rawps = await Review.query().where('reviewFor', params.id).where('review_type','school').where('is_active', 1).count();
    rawps = JSON.parse(JSON.stringify(rawps))
    let ps = rawps[0]['count(*)'];
    console.log(ps)
    let healthSoreIndex = await Review.query().where('reviewFor', params.id).where('review_type','school')
      .select(Database.raw('cast(AVG(healthyIndex) as decimal(10,2)) AS healthyIndex'), Database.raw('cast(AVG(harmfulIndex) as decimal(10,2)) AS harmfulIndex'))
      .first();
    
    let asss = await Database.raw('SELECT (SELECT COUNT(id)  FROM `reviews` WHERE `healthyIndex` < `harmfulIndex` and `reviewFor` = ? and review_type = "school" ) as NegativeReview,(SELECT count(id)  FROM `reviews`  where reviewFor = ? and review_type = "school" ) as TotalReview , (SELECT COUNT(id)  FROM `reviews` WHERE `healthyIndex` >= `harmfulIndex` and `reviewFor` = ? and review_type = "school") as PositiveReview ,  (cast(AVG(healthyIndex) as decimal(10,2))) AS avgHealthIndex , (cast(AVG(harmfulIndex) as decimal(10,2))) AS avgHarmfulIndex   From `reviews` WHERE   `reviewFor` = ? and review_type = "school" ' , [ params.id,params.id,params.id,params.id])

    

    // let streak = await this.getStreak(params.id)
    let allreview = await Database.raw('SELECT * FROM `reviews` WHERE `healthyIndex` >= `harmfulIndex` and `reviewFor` = ? and review_type = "school" ORDER BY id DESC', [params.id])

    // let allreview = await Review.query().where('reviewFor', params.id).where('healthyIndex', '>=', 'harmfulIndex').orderBy('id', 'asc').fetch()

    let data = allreview[0]

    let tempData = []
    for (let i of data) {
      tempData.push(i.id)
    }
    let streak = this.countNumberOfPositiveReview(tempData)


    let corruption = await Database.raw('SELECT COUNT(id) as totalCorruption From `review_attributes` WHERE  (`attribute_id` = 16 or  `attribute_id` = 17)  and `reviewFor` = ? and review_type = "school"', [params.id])

    // let last10 = await Database.raw('SELECT COUNT(id) as NegativeReview ,(SELECT COUNT(id)  FROM `reviews` WHERE `healthyIndex` >= `harmfulIndex` and `reviewFor` = ? ORDER BY id DESC LIMIT 10) as PositiveReview From `reviews` WHERE `healthyIndex` < `harmfulIndex` and `reviewFor` = ? ORDER BY id DESC LIMIT 10 ', [params.id, params.id])

    let last10 = this.countLast10(data)

    let healthSore = ((asss[0][0].avgHealthIndex - asss[0][0].avgHarmfulIndex) * 6.66)
    let PCT = parseFloat((parseFloat(asss[0][0].PositiveReview) * 100) /  parseFloat(asss[0][0].TotalReview))
    PCT = PCT.toFixed(2)
    let STI = streak + asss[0][0].PositiveReview + ((asss[0][0].avgHealthIndex - asss[0][0].avgHarmfulIndex) * 6.66)
    return response.status(200).json({
      
      healthSoreIndex: healthSoreIndex,
      metrice: asss[0][0],
      streak: streak,
      ps: ps,
      PCT: PCT?parseFloat(PCT):0,
      totalCorruption: corruption[0][0].totalCorruption,
      last10: last10,
      healthSore: healthSore,
      STI: STI,
    })
  }


  // method for counting consecutive positive review
  countNumberOfPositiveReview(arr) {

    const numbers = new Set(arr), counts = {};
    var max = 1;
    for (const num of numbers.values()) {
      // console.log(num)
      let counting = true, next = num + 1;
      numbers.delete(num);
      while(counting) {
        counting = false;
        while (numbers.has(next)) { numbers.delete(next++) }
        if (counts[next]) { counting = numbers.has(next += counts[next]) }
      }
      max = Math.max(counts[num] = next - num, max);
    }
    return max;
  }


  // last 10
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

  async getSchoolcoaches({ request, params }) {
    let city = request.input('city') ? request.input('city') : ''
    let data = SchoolCoach.query()
      .with('school')
      .with('avgRatingTopThree')
      .withCount('allreview')
    if (city) {
      data.whereHas('school', (builder) => {
        builder.where('city', city)
      })
    }
    return await data.limit(3).fetch()
  }
  async getSimilarCoach({ request, params }) {

    return SchoolCoach.query().where('school_id', params.id).whereNot('id',params.coach).fetch()
  }

  /**
   * Render a form to update an existing school.
   * GET schools/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update school details.
   * PUT or PATCH schools/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a school with id.
   * DELETE schools/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
  }
  async test({ params, request, response }) {
    let place = await  Database.raw('SELECT * FROM `places` ORDER by name asc')

   // return await Place.createMany(place[0])
   return place
    
  }
}

module.exports = SchoolController
