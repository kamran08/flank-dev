'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductReviewAtrributeSchema extends Schema {
  up () {
    this.create('product_review_atrributes', (table) => {
      table.increments()
      table.integer('revew_id')
      table.integer('attribute_id')
      table.integer('user_id')
      table.integer('isPositive', 1).defaultTo(0)
      table.integer('isNegative', 1).defaultTo(0)
      table.timestamps() 
    })
  }

  down () {
    this.drop('product_review_atrributes')
  }
}

module.exports = ProductReviewAtrributeSchema
