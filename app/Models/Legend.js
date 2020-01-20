'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Database = use('Database')

class Legend extends Model {  
  reviews () {
    return this.hasMany('App/Models/Review', 'id', 'reviewFor').orderBy('id', 'desc').limit(2).where('review_type', 'legend')
  }
  reviewsall () {
    return this.hasOne('App/Models/Review', 'id', 'reviewFor').where('review_type', 'legend')
  }
  avgRating () {
    return this.hasOne('App/Models/Review', 'id', 'reviewFor').select( 'reviewFor', Database.raw('(cast(AVG(rating) as decimal(10,2))) AS averageRating'), Database.raw('(cast(sum(rating) as decimal(10,2))) AS totalRating'),Database.raw('(cast(AVG(healthyIndex) as decimal(10,2))) AS averageHealthy'), Database.raw('(cast(sum(healthyIndex) as decimal(10,2))) AS totalHealthy'), Database.raw('(cast(sum(harmfulIndex) as decimal(10,2))) AS totalHarmful'), Database.raw('(cast(AVG(harmfulIndex) as decimal(10,2))) AS averageHarmful')).where('review_type', 'legend')
  }
  legendimages () {
    return this.hasMany('App/Models/LegendImage', 'id', 'legend_id')
  }
  firstImage () {
    return this.hasOne('App/Models/LegendImage', 'id', 'legend_id')
  }
  questions () {
    return this.hasMany('App/Models/Question', 'id', 'legend_id').where('type','legend').orderBy('id', 'desc')
  }
  question () {
    return this.hasMany('App/Models/Question', 'id', 'legend_id').where('type','legend').orderBy('id', 'desc').limit(1)
  }
  hours () {
    return this.hasMany('App/Models/BusniessHour', 'id', 'legend_id')
  }
  totalReview () {
    return this.hasOne('App/Models/Review', 'id', 'reviewFor').where('review_type', 'legend')
  } 
  allreviewLimit () {
    return this.hasOne('App/Models/Review', 'id', 'reviewFor').where('review_type', 'legend').limit(1).orderBy('id','desc')
  }
  topAtrribute () {
    return this.hasMany('App/Models/ReviewAttribute', 'id', 'reviewFor').select( 'reviewFor' , 'attribute_id', Database.raw('COUNT(id) as total')).groupBy('attribute_id').limit(4);
  }

}

module.exports = Legend
