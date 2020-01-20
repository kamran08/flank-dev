'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductQuestionSchema extends Schema {
  up () {
    this.create('product_questions', (table) => {
      table.increments()
      table.integer('user_id')
      table.integer('product_id')
      table.text('content')
      table.timestamps()
    })
  }

  down () {
    this.drop('product_questions')
  }
}

module.exports = ProductQuestionSchema
