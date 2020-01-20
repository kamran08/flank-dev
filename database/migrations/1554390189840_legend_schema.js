'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LegendSchema extends Schema {
  up () {
    this.create('legends', (table) => {
      table.increments()
      table.integer('user_id').notNullable()
      table.string('name').notNullable()
      table.text('address').nullable()
      table.string('phone').nullable()
      table.string('img', 60).defaultTo('/uploads/four.jpg')
      table.timestamps()
    })
  }

  down () {
    this.drop('legends')
  }
}

module.exports = LegendSchema
