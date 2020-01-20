'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductReviewImageSchema extends Schema {
  up () {
    this.create('product_review_images', (table) => {
      table.increments()
      table.integer('review_id')
      table.string('url')
      table.timestamps()
    })
  }

  down () {
    this.drop('product_review_images')
  }
}

module.exports = ProductReviewImageSchema
