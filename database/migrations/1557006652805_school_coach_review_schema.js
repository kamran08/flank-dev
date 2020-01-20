'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SchoolCoachReviewSchema extends Schema {
  up () {
    this.create('school_coach_reviews', (table) => {
      table.increments()
      table.integer('coach_id')
      table.integer('school_id')
      table.integer('reviwer_id')
      table.text('content')
      table.integer('rating')
      table.timestamps()
    })
  }

  down () {
    this.drop('school_coach_reviews')
  }
}

module.exports = SchoolCoachReviewSchema
