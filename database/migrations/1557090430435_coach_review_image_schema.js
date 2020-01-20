'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CoachReviewImageSchema extends Schema {
  up () {
    this.create('coach_review_images', (table) => {
      table.increments()
      table.integer('review_id')
      table.string('url')
      table.timestamps()
    })
  }

  down () {
    this.drop('coach_review_images')
  }
}

module.exports = CoachReviewImageSchema
