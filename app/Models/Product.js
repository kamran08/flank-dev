'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Database = use('Database') 

class Product extends Model {
  reviews () {
    return this.hasMany('App/Models/Review', 'id', 'reviewFor').orderBy('id', 'desc').limit(2).where('review_type', 'product')
  }
  reviewsall () {
    return this.hasOne('App/Models/Review', 'id', 'reviewFor').where('review_type', 'product')
  }
  avgRating () {
    return this.hasOne('App/Models/Review', 'id', 'reviewFor').select('id', 'reviewFor', Database.raw('(cast(AVG(rating) as decimal(10,2))) AS averageRating')).where('review_type', 'product')
  }
  legendimages () {
    return this.hasMany('App/Models/ProductImage', 'id', 'product_id')
  }
  firstImage () {
    return this.hasOne('App/Models/ProductImage', 'id', 'product_id')
  }
  questions () {
    return this.hasMany('App/Models/ProductQuestion', 'id', 'product_id').orderBy('id', 'desc').limit(1)
  }

}

module.exports = Product
