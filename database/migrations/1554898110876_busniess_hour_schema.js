'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BusniessHourSchema extends Schema {
  up () {
    this.create('busniess_hours', (table) => {
      table.increments()
      table.integer('legend_id')
      table.string('time')
      table.string('day')
      table.timestamps()
    })
  }

  down () {
    this.drop('busniess_hours')
  }
}

module.exports = BusniessHourSchema
