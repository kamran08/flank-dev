'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AboutLegnedSchema extends Schema {
  up () {
    this.create('about_legneds', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('about_legneds')
  }
}

module.exports = AboutLegnedSchema
