'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReviewSchema extends Schema {
  up () {
    this.create('reviews', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.text('content').notNullable()
      table.string('img1').nullable()
      table.string('img2').nullable()
      table.string('img3').nullable()
      table.integer('q1').nullable()
      table.integer('q2').nullable()
      table.integer('q3').nullable()
      table.integer('q4').nullable()
      table.integer('q5').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('reviews')
  }
}

module.exports = ReviewSchema
