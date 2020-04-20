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
const Sport = use('App/Models/Sport')
const Database = use('Database')
var _ = require('lodash')

class SearchController {
  async SearchData({
    request,
    response,
    params
  }) {
    let place = request.input('place') ? request.input('place') : ''
    let str = request.input('str') ? request.input('str') : ''
    let str2 = request.input('str2') ? request.input('str2') : ''
    let page = request.input('page') ? request.input('page') : 1
    let price = request.input('price') ? request.input('price') : ''
    let sort = request.input('sort') ? request.input('sort') : ''
    let rate = request.input('rate') ? request.input('rate') : ''
    let sports = request.input('sports') ? request.input('sports') : ''
    let attribute = request.input('attribute') ? request.input('attribute') : ''
    let div = request.input('div') ? request.input('div') : ''
    let pageOption = request.input('pageOption') ? request.input('pageOption') : 'legend'
    let similar = [];
    let data = {}

    if (pageOption == 'legend') {
       console.log("ami ono taki call oise legend")
      data = Legend.query().withCount('totalReview as allreview ')
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
        data.whereBetween('avg_rating', [brate, rate])
      }
      if (attribute) {
        data.orderBy(attribute, 'desc')
      }
 
      if (sports) {
        var array = sports.split(",");
        data.whereIn('sport', array)
      }


    } else if (pageOption == 'product') {
       console.log("ami ono taki call oise product")

      data = Product.query()
      if (str) {
        data.where('name', 'LIKE', '%' + str + '%')
        data.orWhere('category', 'LIKE', '%' + str + '%')
        data.orWhere('description', 'LIKE', '%' + str + '%')
      }

    } 
    else if (pageOption == 'school') {
      console.log("ami ono taki call oise school")
       data = School.query()
        .with('avgRating')
        .withCount('allreview as allreview')

      if (str) {
        data.where('schoolName', 'LIKE', '%' + str + '%');
      }
      if (rate > 0) {
        rate = parseFloat(rate)
        let brate = rate - 0.99
        data.whereHas('avgRating', (builder) => {
          builder.whereBetween('averageRating', [brate, rate]);
        });
      }
       if (sort) {
             if (sort == 1) {
                data.whereHas('avgRating', (builder) => {
                  builder.orderBy('averageRating', 'asc');
                });
              //  data.orderBy('avgRating', 'asc')
             } else if (sort == 2) {
               data.whereHas('avgRating', (builder) => {
                 builder.orderBy('averageRating', 'desc');
               });
              //  data.orderBy('avgRating', 'desc')
             } else if (sort == 3) {
                data.orderBy('created_at', 'desc')
             }
         }
      if (place) {
        data.where('city', 'LIKE', '%' + place + '%');
        data.orWhere('state', 'LIKE', '%' + place + '%');
        data.orWhere('division', 'LIKE', '%' + place + '%');
      }
      if (sports) {
        var array = sports.split(",");
        data.whereIn('sport', array);
      }
    } 
    
    else if (pageOption == 'coach') {
     
      data = SchoolCoach.query()
        .with('allreviewLimit')
        .with('topAtrribute.info')
        .withCount('allreview as allreview')

        .with('school')
      if (str) {
        //  console.log("ami ono taki call oise coach" + str)
        data.where('name', 'LIKE', '%' + str + '%')
        
      }
      if (str2) {
        data.whereHas('school', (builder) => {
          builder.where('schoolName', 'LIKE', '%' + str2 + '%')
        })
      }
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
        data.orderBy(attribute, 'desc')
      }
       if (sort) {
         if (sort == 1) {
           data.orderBy('avg_rating', 'asc')
         } else if (sort == 2) {
           data.orderBy('avg_rating', 'desc')
         } else if (sort == 3) {
           data.orderBy('created_at', 'desc')
         }
       }
      if (rate > 0) {

        rate = parseFloat(rate)
        let brate = rate - 0.99
        data.whereBetween('avg_rating', [brate, rate])
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
    // console.log(mdata)
    let tempData = JSON.parse(JSON.stringify(mdata))

    let flankChoice = {};
    let ids = [];
    let school_ids = 0
    let states = 0
    if (tempData.data.length > 0) {

      for (let d of tempData.data) {
        d.isSeeMore = false
        if (d.avgRating == null) {
          d.avgRating = {
            averageRating: 0
          };
        }
        d.recentHealthScore = 0.00
        if (d.allreviewLimit != null) {
          let a = (d.allreviewLimit.healthyIndex) ? d.allreviewLimit.healthyIndex : 0;
          let b = (d.allreviewLimit.harmfulIndex) ? d.allreviewLimit.harmfulIndex : 0;
          d.recentHealthScore = parseFloat((parseFloat(a).toFixed(2) - parseFloat(b).toFixed(2)) * 6.66).toFixed(2)
        }

        let a = (d.averageHealthy) ? d.averageHealthy : 0;
        let b = (d.averageHarmful) ? d.averageHarmful : 0;
        d.healthScore = parseFloat((parseFloat(a).toFixed(2) - parseFloat(b).toFixed(2)) * 6.66).toFixed(2)

        ids.push(d.id)

      }
      if (pageOption == 'coach') {
        states = tempData.data[0].school.state
        school_ids = tempData.data[0].school.id
        similar = await SchoolCoach.query()

          .with('allreviewLimit')
          .with('topAtrribute.info')
          .withCount('allreview as allreview')
          .with('school')
          .whereHas('school', (builder) => {
            builder.where('state', states)
            // builder.orWhere('city',  place)
          })
          .whereNotIn('id', ids)
          .limit(10).fetch()
      } else if (pageOption == 'legend') {
        states = tempData.data[0].state
        similar = await Legend.query()

          .with('allreviewLimit')
          .with('topAtrribute.info')
          .withCount('totalReview as allreview ')
          .where((builder) => {
            builder.where('city', 'LIKE', '%' + place + '%')
            builder.orWhere('state', 'LIKE', '%' + states + '%')
          })

          .whereNotIn('id', ids).limit(10).fetch()
      } else if (pageOption == 'school') {
        similar = await SchoolCoach.query()
          .with('allreviewLimit')
          .with('topAtrribute.info')
          .withCount('allreview as allreview')
          .whereIn('school_id', ids)
          .whereHas('school', (builder) => {
            builder.where('city', 'LIKE', '%' + place + '%')
          })

          .limit(10).fetch()
      }
      if (pageOption != "product") {
        similar = JSON.parse(JSON.stringify(similar))
        for (let d of similar) {
          d.isSeeMore = false
          if (d.avgRating == null) {
            d.avgRating = {
              averageRating: 0
            };
          }
          d.recentHealthScore = 0.00
          if (d.allreviewLimit != null) {
            let a = (d.allreviewLimit.healthyIndex) ? d.allreviewLimit.healthyIndex : 0;
            let b = (d.allreviewLimit.harmfulIndex) ? d.allreviewLimit.harmfulIndex : 0;
            d.recentHealthScore = parseFloat((parseFloat(a).toFixed(2) - parseFloat(b).toFixed(2)) * 6.66).toFixed(2)
          }
          let a = (d.averageHealthy) ? d.averageHealthy : 0;
          let b = (d.averageHarmful) ? d.averageHarmful : 0;
          d.healthScore = parseFloat((parseFloat(a).toFixed(2) - parseFloat(b).toFixed(2)) * 6.66).toFixed(2)

        }
      }
    }






    // if (sort == 'rated') {
    //   tempData.data = _.orderBy(tempData.data, 'avgRating.averageRating', 'desc')
    // } else if (sort == 'Worst') {
    //   tempData.data = _.orderBy(tempData.data, 'avgRating.averageRating', 'ASC')
    // }


    return response.status(200).json({
      mainData: tempData,
      similarData: similar
    })
  }

  async searchPlace({
    request
  }) {

    let place = request.input('place') ? request.input('place') : ''
    return await Place.query()
      .where('name', 'LIKE', '%' + place + '%').limit(20)
      .fetch()
  }
  async searchCoachForReview({
    request
  }) {

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

    return await data.paginate(page, 20)

  }
  async SearchByKeyCoach({
    request
  }) {
    const data = request.all()
    return await Legend.query()
      .select('name')
      .select('sport')
      .select('id')
      .where('name', 'LIKE', '%' + data.key + '%')
      .fetch()
  }
  async SearchByKeyProduct({
    request
  }) {
    const data = request.all()
    return await Product.query()
      .select('name')
      .select('id')
      .where('name', 'LIKE', '%' + data.key + '%')
      .fetch()
  }

  //  for school search
  async SearchByKeySchool({
    request
  }) {
    const data = request.all()
    
    return await School.query()
      // .distinct('schoolName as name')
      .distinct('city')
      // .distinct('state')
      // .select(Database.raw('DISTINCT SchoolName as name'), 'city', 'sport', 'state')
      .select('schoolName as name')
      .select('sport')
      .select('city')
      .select('state')
      .select('division')
      .select('id')
      .where('schoolName', 'LIKE', '%' + data.key + '%').
      limit(10)
      .groupBy('city')
      // .groupBy('schoolName')
      .fetch()
  }
  // for coach search 

  async SearchByKeySchoolCoach({
    request
}) {
    const data = request.all()

    //  let school =  await School.query().where('id', data.school_id).first()


   let schoolss = await School.query().select('id').where('schoolName', data.name).fetch()
     schoolss = schoolss.toJSON()
     // console.log(mdata)
     let tempData = JSON.parse(JSON.stringify(schoolss))
     let arr = []
      //  return schoolss[0].id
     for (let i of tempData) {
      //  return schoolss[i].id
       arr.push(i.id)
     }
    //  return arr



    return await SchoolCoach.query().with('school')
      .select('name')
      .select('id')
      .select('school_id')
      .where('name', 'LIKE', '%' + data.key + '%')
      .whereIn('school_id', arr).
      limit(10)
      .fetch()
  }
  async SearchByKeySchoolCoachNew({
    request
}) {
    const data = request.all()
    return await SchoolCoach.query()
      .select('name')
      // .select('sport')
      .select('school_id')
      .select('id')
      .with('school')
      
      .where('name', 'LIKE', '%' + data.coachName + '%').
      limit(10).fetch()
  }
  async getAllSportsByKey({request}) {
     const data = request.all()
    let schoolss = await School.query()
     .distinct('sport')
       .select('sport')
       .select('id')
       .where('schoolName', 'LIKE', '%' + data.key + '%').
        limit(12)
       .groupBy('sport')
       .fetch()
    
    
    schoolss = schoolss.toJSON()
    let tempData = JSON.parse(JSON.stringify(schoolss))
    let arr = []
    for (let i of tempData) {
      arr.push({id:i.id,sport:i.sport})
    }
    return arr
  }


  async getAllSports({request }) {
    const data = request.all()
    return await Sport.all()
  }
}

module.exports = SearchController
