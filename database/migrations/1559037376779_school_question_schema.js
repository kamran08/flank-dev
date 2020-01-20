'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SchoolQuestionSchema extends Schema {
  up () {
    this.create('school_questions', (table) => {
      table.increments()
      table.integer('user_id')
      table.integer('school_id')
      table.text('content')
      table.timestamps()
    })
  }

  down () {
    this.drop('school_questions')
  }
}

module.exports = SchoolQuestionSchema
