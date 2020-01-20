'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ReviewAttribute extends Model {
    healthyIndex () {
        return this.hasMany('App/Models/Review', 'review_id')
    }
    info(){
      return this.belongsTo('App/Models/Attribute', 'attribute_id', 'id')
    }

}


module.exports = ReviewAttribute
