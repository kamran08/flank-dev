'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductImoSchema extends Schema {
  up () {
    this.create('product_imos', (table) => {
      table.increments()
      table.integer('review_id')
      table.integer('user_id')
      table.integer('cool')
      table.integer('funny')
      table.integer('useful')
      table.timestamps()
    })
  }

  down () {
    this.drop('product_imos')
  }
}

module.exports = ProductImoSchema
