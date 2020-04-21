'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TempSchoolSchema extends Schema {
  up () {
    this.create('temp_schools', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('temp_schools')
  }
}

module.exports = TempSchoolSchema
