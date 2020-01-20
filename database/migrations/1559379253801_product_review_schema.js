'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductReviewSchema extends Schema {
  up () {
    this.create('product_reviews', (table) => {
      table.increments()
      table.integer('product_id')
      table.integer('school_id')
      table.integer('reviwer_id')
      table.text('content')
      table.integer('rating')
      table.timestamps()
    })
  }

  down () {
    this.drop('product_reviews')
  }
}

module.exports = ProductReviewSchema
