'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReviewimoSchema extends Schema {
  up () {
    this.create('reviewimos', (table) => {
      table.increments()
      table.integer('review_id')
      table.integer('user_id')
      table.integer('cool')
      table.integer('funny')
      table.integer('useful')
      table.timestamps()
    })
  }

  down () {
    this.drop('reviewimos')
  }
}

module.exports = ReviewimoSchema
