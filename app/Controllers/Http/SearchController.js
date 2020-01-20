/* eslint-disable no-return-await */
/* eslint-disable standard/object-curly-even-spacing */
/* eslint-disable no-multi-spaces */
/* eslint-disable eqeqeq */
'use strict'
const Legend = use('App/Models/Legend')
const School = use('App/Models/School')
const SchoolCoach = use('App/Models/SchoolCoach')
const Product = use('App/Models/Product')
const Place = use('App/Models/Place')
const Database = use('Database')
var _ = require('lodash')

class SearchController {
  async SearchData ({ request, response, params }) {
    let place = request.input('place') ? request.input('place') : ''
    let str = request.input('str') ? request.input('str') : ''
    let page = request.input('page') ? request.input('page') : 1
    let price = request.input('price') ? request.input('price') : ''
    let sort = request.input('sort') ? request.input('sort') : ''
    let rate = request.input('rate') ? request.input('rate') : ''
    let sports = request.input('sports') ? request.input('sports') : ''
    let attribute = request.input('attribute') ? request.input('attribute') : ''
    let div = request.input('div') ? request.input('div') : ''
    let pageOption = request.input('pageOption') ? request.input('pageOption') : 'legend'
    let similar = {};
    let data = {}
   
    if (pageOption == 'legend') {
      data =  Legend.query().withCount('totalReview as allreview ' )
                  .with('allreviewLimit')
        if (str) {
          data.where('name', 'LIKE', '%' + str + '%')
        }
        if (place) {
          data.where('city', 'LIKE', '%' + place + '%')
        }
        if (rate > 0) {
          
          rate = parseFloat(rate)
          let brate = rate - 0.99
          data.whereBetween ('avg_rating', [brate,rate])
        }
        if (attribute) {
          data.orderBy( attribute, 'desc')
        }
        if (sports) {
          var array = sports.split(",");
            data.whereIn('sport', array)
        }


    }    else if (pageOption == 'product') { 

      data =  Product.query()
      if (str) {
        data.where('name', 'LIKE', '%' + str + '%')
        data.orWhere('category', 'LIKE', '%' + str + '%')
        data.orWhere('description', 'LIKE', '%' + str + '%')
      }
      
    }    else if (pageOption == 'school') {
      data =  School.query()
        .with('avgRating')
        .withCount('allreview as allreview ')

      if (str) {
        data.where('schoolName', 'LIKE', '%' + str + '%')
      }
      if (rate > 0) {
        data.where('avgRating.averageRating', '<=', rate)
      }
      if (place) {
        data.where('city', 'LIKE', '%' + place + '%')
        data.orWhere('state', 'LIKE', '%' + place + '%')
        data.orWhere('division', 'LIKE', '%' + place + '%')
      }
      if (sports) {
        var array = sports.split(",");
          data.whereIn('sport', array)
      }
    } else if (pageOption == 'coach') {
      data =   SchoolCoach.query()
        .with('allreviewLimit')
        .with('topAtrribute.info' )
        .withCount('allreview as allreview')
        
        .with('school')

      if (div) {
        data.whereHas('school', (builder) => {
          builder.where('division', div)
        })
      }
      if (sports) {
        var array = sports.split(",");
        data.whereHas('school', (builder) => {
          builder.whereIn('sport', array)
        })
      }
      if (attribute) {
        data.orderBy( attribute, 'desc')
      }
      if (rate > 0) {
          
        rate = parseFloat(rate)
        let brate = rate - 0.99
        data.whereBetween ('avg_rating', [brate,rate])
      }

      if (str) {
        data.where('name', 'LIKE', '%' + str + '%')
      }
      if (place) {
         data.whereHas('school', (builder) => {
           builder.where('city', 'LIKE', '%' + place + '%')
         })
       }

      
    }
    // if (sort == 'most') {
    //   data.orderBy('allreview', 'desc')
    //  }
    let mdata = await data.paginate(page, 10)
    mdata = mdata.toJSON()
    let tempData = JSON.parse(JSON.stringify(mdata))
   
    let flankChoice = {};
    let ids = [];
    let school_ids = 0
    let states = 0
     if(tempData.data.length>0){

      for (let d of tempData.data) {
        if (d.avgRating == null) {
          d.avgRating = {
            averageRating: 0 
          };
        }
        d.recentHealthScore = 0.00
        if(d.allreviewLimit !=null){
          let a = (d.allreviewLimit.healthyIndex)? d.allreviewLimit.healthyIndex : 0;
          let b = (d.allreviewLimit.harmfulIndex)? d.allreviewLimit.harmfulIndex : 0;
          d.recentHealthScore = parseFloat( (parseFloat(a).toFixed(2) - parseFloat(b).toFixed(2) ) * 6.66  ).toFixed(2)
        }

        let a = (d.averageHealthy)? d.averageHealthy : 0;
        let b = (d.averageHarmful)? d.averageHarmful : 0;
        d.healthScore = parseFloat( (parseFloat(a).toFixed(2) - parseFloat(b).toFixed(2) ) * 6.66  ).toFixed(2)
        
        ids.push(d.id)
       
      }
      if(pageOption == 'coach'){
        states = tempData.data[0].school.state
        school_ids = tempData.data[0].school.id
        similar = await SchoolCoach.query() 
                             
                              .with('allreviewLimit')
                              .with('topAtrribute.info' )
                              .withCount('allreview as allreview')
                              .with('school')
                              .whereHas('school', (builder) => {
                                builder.where('state',states)
                               // builder.orWhere('city',  place)
                              })
                              .whereNotIn('id',ids)
                              .limit(40).fetch()
        }
       
        else if(pageOption == 'legend'){
          states = tempData.data[0].state
          similar = await Legend.query() 
                               
                                .with('allreviewLimit')
                                .with('topAtrribute.info' )
                                .withCount('totalReview as allreview ' )
                                .where( (builder) => {
                                  builder.where('city', 'LIKE', '%' + place + '%')
                                  builder.orWhere('state', 'LIKE', '%' + states + '%')
                                })
                                
                                .whereNotIn('id',ids).limit(40).fetch()
        }
        else if(pageOption == 'school'){
         
          console.log(ids)
          similar = await SchoolCoach.query() 
                                .with('allreviewLimit')
                                .with('topAtrribute.info' )
                                .withCount('allreview as allreview')
                                .whereIn('school_id',   ids)
                                .whereHas('school', (builder) => {
                                  builder.where('city', 'LIKE', '%' + place + '%')
                                
                                  
                                })
                                
                                .limit(40).fetch()
        }
        if( pageOption != "product"){
          similar = JSON.parse(JSON.stringify(similar))
          for (let d of similar) {
            if (d.avgRating == null) {
              d.avgRating = {
                averageRating: 0 
              };
            }
            d.recentHealthScore = 0.00
            if(d.allreviewLimit !=null){
              let a = (d.allreviewLimit.healthyIndex)? d.allreviewLimit.healthyIndex : 0;
              let b = (d.allreviewLimit.harmfulIndex)? d.allreviewLimit.harmfulIndex : 0;
              d.recentHealthScore = parseFloat( (parseFloat(a).toFixed(2) - parseFloat(b).toFixed(2) ) * 6.66  ).toFixed(2)
            }
            let a = (d.averageHealthy)? d.averageHealthy : 0;
            let b = (d.averageHarmful)? d.averageHarmful : 0;
            d.healthScore = parseFloat( (parseFloat(a).toFixed(2) - parseFloat(b).toFixed(2) ) * 6.66  ).toFixed(2)
          
          }
        }
      }
        



     

    // if (sort == 'rated') {
    //   tempData.data = _.orderBy(tempData.data, 'avgRating.averageRating', 'desc')
    // } else if (sort == 'Worst') {
    //   tempData.data = _.orderBy(tempData.data, 'avgRating.averageRating', 'ASC')
    // }

   
    return response.status(200).json({
      mainData : tempData,
      similarData: similar
    })
  }

  async searchPlace ({ request }) {
   
    let place = request.input('place') ? request.input('place') : ''
    return await Place.query()
      .where('name', 'LIKE', '%' + place+ '%').limit(20)
      .fetch()
  }
  async searchCoachForReview ({ request }) {
   
    let place = request.input('place') ? request.input('place') : ''
    let txt = request.input('txt') ? request.input('txt') : ''
    let page = request.input('page') ? request.input('page') : 1

    let data = SchoolCoach.query()
        .withCount('allreview as allreview')
        .with('school')

      if (place) {
        data.whereHas('school', (builder) => {
          builder.where('city', 'LIKE', '%' + place + '%')
         // builder.orWhere('state', place)
          
        })
      }
      if (txt) {
        data.where('name', 'LIKE', '%' + txt + '%')
      }

      return await data.paginate(page,20)
   
  }
  async SearchByKeyCoach ({ request }) {
    const data = request.all()
    return await Legend.query()
      .select('name')
      .select('id')
      .where('name', 'LIKE', '%' + data.key + '%')
      .fetch()
  }
  async SearchByKeyProduct ({ request }) {
    const data = request.all()
    return await Product.query()
      .select('name')
      .select('id')
      .where('name', 'LIKE', '%' + data.key + '%')
      .fetch()
  }

  async SearchByKeySchool ({ request }) {
    const data = request.all()
    return await School.query()
      .select('schoolName as name')
      .select('sport')
      .select('id')
      .where('schoolName', 'LIKE', '%' + data.key + '%')
      .fetch()
  }

  async SearchByKeySchoolCoach ({ request }) {
    const data = request.all()
    return await SchoolCoach.query()
      .select('name')
      .select('id')
      .where('name', 'LIKE', '%' + data.key + '%')
      .where('school_id',  data.school_id)
      .fetch()
  }
  async getAllSports ({ request }) {
    const data = request.all()
    return await School.query()
      .select(Database.raw('DISTINCT  sport'))
      .fetch()
  }
}

module.exports = SearchController
