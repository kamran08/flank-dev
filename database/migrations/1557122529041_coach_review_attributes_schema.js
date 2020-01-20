'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CoachReviewAttributesSchema extends Schema {
  up () {
    this.create('coach_review_attributes', (table) => {
      table.increments()
      table.integer('review_id')
      table.integer('attribute_id')
      table.integer('user_id')
      table.integer('points')
      table.timestamps()
    })
  }

  down () {
    this.drop('coach_review_attributes')
  }
}

module.exports = CoachReviewAttributesSchema
