'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Database = use('Database')

class Review extends Model {
  static get traits () {
    return ['@provider:Morphable']
  }
  reviwer () {
    return this.belongsTo('App/Models/User', 'reviwer_id')
  }
  hasfollow ({  auth }) {
    // if(auth)
    return this.hasOne('App/Models/Follow', auth.user.id, 'following')
  }
  follow() {
    return this.hasMany('App/Models/Follow','reviwer_id','following')
  }
  following() {
    return this.hasMany('App/Models/Follow', 'reviwer_id', 'follower')
  }
  reviewfor () {
    return this.belongsTo('App/Models/Legend', 'reviewFor')
  }
  legend () {
    return this.belongsTo('App/Models/Legend', 'reviewFor')
  }
  product () {
    return this.belongsTo('App/Models/Product', 'reviewFor')
  }
  coach () {
    return this.belongsTo('App/Models/SchoolCoach', 'reviewFor')
  }
  school () {
    return this.belongsTo('App/Models/School', 'school_id')
  }
  reviewforInfo () {
    return this.belongsTo('App/Models/Legend', 'reviewFor')
  }
  images () {
    return this.hasMany('App/Models/ReviewImage', 'id', 'review_id')
  }
  imosall () {
    return this.hasOne('App/Models/Reviewimo')
  }
  imos () {
    return this.hasOne('App/Models/Reviewimo').select('review_id', Database.raw('sum(cool)   AS cool'), Database.raw('sum(funny)   AS funny'), Database.raw('sum(useful)   AS useful')).groupBy('review_id')
  }
  healthyIndex () {
    return this.hasMany('App/Models/ReviewAttribute', 'id','review_id')
  }
  // healthyIndex () {
  //   return this.hasOne('App/Models/ReviewAttribute', 'id', 'review_id').select('school_id', Database.raw('(cast(AVG(rating) as decimal(10,2))) AS healthyIndex')).where('review_type', 'school').groupBy('review_id')
  // }
}

module.exports = Review
