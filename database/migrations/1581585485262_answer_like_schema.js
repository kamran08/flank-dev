'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnswerLikeSchema extends Schema {
  up () {
    this.create('answer_likes', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('answer_likes')
  }
}

module.exports = AnswerLikeSchema
