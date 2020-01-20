'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReviewAttributeSchema extends Schema {
  up () {
    this.create('review_attributes', (table) => {
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
    this.drop('review_attributes')
  }
}

module.exports = ReviewAttributeSchema
