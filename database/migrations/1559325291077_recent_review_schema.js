'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RecentReviewSchema extends Schema {
  up () {
    this.create('recent_reviews', (table) => {
      table.increments()
      table.integer('review_id')
      table.string('review_type')
      table.timestamps()
    })
  }

  down () {
    this.drop('recent_reviews')
  }
}

module.exports = RecentReviewSchema
