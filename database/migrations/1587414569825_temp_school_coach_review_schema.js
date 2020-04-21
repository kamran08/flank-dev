'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TempSchoolCoachReviewSchema extends Schema {
  up () {
    this.create('temp_school_coach_reviews', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('temp_school_coach_reviews')
  }
}

module.exports = TempSchoolCoachReviewSchema
