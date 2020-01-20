'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductImageSchema extends Schema {
  up () {
    this.create('product_images', (table) => {
      table.increments()
      table.integer('product_id')
      table.string('url')
      table.timestamps()
    })
  }

  down () {
    this.drop('product_images')
  }
}

module.exports = ProductImageSchema
