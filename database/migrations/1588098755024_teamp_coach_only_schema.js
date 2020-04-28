'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TeampCoachOnlySchema extends Schema {
  up () {
    this.create('teamp_coach_onlies', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('teamp_coach_onlies')
  }
}

module.exports = TeampCoachOnlySchema
