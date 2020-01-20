'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SchoolAnswerSchema extends Schema {
  up () {
    this.create('school_answers', (table) => {
      table.increments()
      table.integer('question_id')
      table.integer('user_id')
      table.text('content')
      table.timestamps()
    })
  }

  down () {
    this.drop('school_answers')
  }
}

module.exports = SchoolAnswerSchema
