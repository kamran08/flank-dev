'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */  
const Model = use('Model')
const Database = use('Database') 

class SchoolCoach extends Model { 
  avgRating () {
    return this.hasOne('App/Models/Review', 'id', 'reviewFor').select( 'reviewFor', Database.raw('(cast(AVG(rating) as decimal(10,2))) AS averageRating'), Database.raw('(cast(sum(rating) as decimal(10,2))) AS totalRating'),Database.raw('(cast(AVG(healthyIndex) as decimal(10,2))) AS averageHealthy'), Database.raw('(cast(sum(healthyIndex) as decimal(10,2))) AS totalHealthy'), Database.raw('(cast(sum(harmfulIndex) as decimal(10,2))) AS totalHarmful'), Database.raw('(cast(AVG(harmfulIndex) as decimal(10,2))) AS averageHarmful')).where('review_type', 'school')
  }

  avgRatingTopThree () {
    return this.hasOne('App/Models/Review', 'id', 'reviewFor').select( 'reviewFor', Database.raw('(cast(AVG(rating) as decimal(10,2))) AS averageRating  '), Database.raw('(cast(sum(rating) as decimal(10,2))) AS totalRating')).where('review_type', 'school')
  }

  allreview () {
    return this.hasMany('App/Models/Review', 'id', 'reviewFor').where('review_type', 'school')
  }
  allreviewLimit () {
    return this.hasOne('App/Models/Review', 'id', 'reviewFor').where('review_type', 'school').limit(1).orderBy('id','desc')
  }
  topAtrribute () {
    return this.hasMany('App/Models/ReviewAttribute', 'id', 'reviewFor').select( 'reviewFor' , 'attribute_id', Database.raw('COUNT(id) as total')).groupBy('attribute_id').orderBy('total','desc').limit(4);
  }
  school () {
    return this.belongsTo('App/Models/School', 'school_id', 'id')
  }
  questionall () {
    return this.hasMany('App/Models/Question', 'id', 'legend_id').where('type', 'school').orderBy('id', 'desc')
  }
  question () {
    return this.hasOne('App/Models/Question', 'id', 'legend_id').where('type', 'school').orderBy('id', 'desc').limit(1)
  }
}

module.exports = SchoolCoach
