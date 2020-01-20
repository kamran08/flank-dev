'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */ 
const Model = use('Model')
const Database = use('Database') 

class School extends Model {
  coaches () {
    return this.hasMany('App/Models/SchoolCoach', 'id', 'school_id')
  }
  allreview () {
    return this.hasMany('App/Models/Review', 'id', 'school_id').where('review_type', 'school')
  }
  allimages () {
    return this.hasMany('App/Models/CoachReviewImage', 'id', 'school_id')
  }
  avgRating () {
    return this.hasOne('App/Models/Review', 'id', 'school_id').select('school_id', Database.raw('(cast(AVG(rating) as decimal(10,2))) AS averageRating')).where('review_type', 'school')
  }
  questions () {
    return this.hasMany('App/Models/SchoolQuestion', 'id', 'school_id').orderBy('id', 'desc').limit(1)
  }
  question () {
    return this.hasOne('App/Models/Question', 'id', 'school_id').where('type', 'school').orderBy('id', 'desc').limit(1)
  }
}

module.exports = School
