'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LegendImageSchema extends Schema {
  up () {
    this.create('legend_images', (table) => {
      table.increments()
      table.integer('legend_id')
      table.string('url')
      table.timestamps()
    })
  }

  down () {
    this.drop('legend_images')
  }
}

module.exports = LegendImageSchema
