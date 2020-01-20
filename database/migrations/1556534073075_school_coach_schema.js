'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SchoolCoachSchema extends Schema {
  up () {
    this.create('school_coaches', (table) => {
      table.increments()
      table.integer('school_id')
      table.string('name')
      table.timestamps()
    })
  }

  down () {
    this.drop('school_coaches')
  }
}

module.exports = SchoolCoachSchema
