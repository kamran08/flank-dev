'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CoachImosSchema extends Schema {
  up () {
    this.create('coach_imos', (table) => {
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
    this.drop('coach_imos')
  }
}

module.exports = CoachImosSchema
