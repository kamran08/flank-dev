'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TempSchoolCoachSchema extends Schema {
  up () {
    this.create('temp_school_coaches', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('temp_school_coaches')
  }
}

module.exports = TempSchoolCoachSchema
