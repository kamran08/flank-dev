'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductAnswerSchema extends Schema {
  up () {
    this.create('product_answers', (table) => {
      table.increments()
      table.integer('question_id')
      table.integer('user_id')
      table.text('content')
      table.timestamps()
    })
  }

  down () {
    this.drop('product_answers')
  }
}

module.exports = ProductAnswerSchema
