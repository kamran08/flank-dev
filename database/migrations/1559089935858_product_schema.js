'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.integer('legend_id').notNullable()
      table.string('name').notNullable()
      table.string('category').notNullable()
      table.text('description').nullable()
      table.integer('price').nullable()
      table.integer('active').defaultTo(1)
      table.string('img', 60).defaultTo('/uploads/four.jpg')
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
