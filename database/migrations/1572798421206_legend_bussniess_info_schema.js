'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LegendBussniessInfoSchema extends Schema {
  up () {
    this.create('legend_bussniess_infos', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('legend_bussniess_infos')
  }
}

module.exports = LegendBussniessInfoSchema
