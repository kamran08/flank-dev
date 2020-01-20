'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PulseSchema extends Schema {
  up () {
    this.create('pulses', (table) => {
      table.increments()
      table.integer('integer')
      table.integer('user_id')
      table.integer('good').defaultTo(0)
      table.integer('bad').defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('pulses')
  }
}

module.exports = PulseSchema
