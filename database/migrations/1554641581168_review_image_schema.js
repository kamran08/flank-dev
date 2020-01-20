'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReviewImageSchema extends Schema {
  up () {
    this.create('review_images', (table) => {
      table.increments()
      table.integer('review_id')
      table.string('url')
      table.timestamps()
    })
  }

  down () {
    this.drop('review_images')
  }
}

module.exports = ReviewImageSchema
