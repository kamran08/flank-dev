'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnswersSchema extends Schema {
  up () {
    this.create('answers', (table) => {
      table.increments()
      table.integer('question_id')
      table.integer('user_id')
      table.text('content')
      table.timestamps()
    })
  }

  down () {
    this.drop('answers')
  }
}

module.exports = AnswersSchema
