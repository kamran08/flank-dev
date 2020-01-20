'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SchoolSchema extends Schema {
  up () {
    this.create('schools', (table) => {
      table.increments()
      table.string('logo')
      table.string('schoolName')
      table.string('city')
      table.string('state')
      table.string('division')
      table.string('sport')
      table.string('roster').nullable()
      table.string('alumni')
      table.string('interestedAthletes').nullable()
      table.string('committedRecruit').nullable()
      table.string('placedAthletes').nullable()
      table.string('teamWebsite').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('schools')
  }
}

module.exports = SchoolSchema
