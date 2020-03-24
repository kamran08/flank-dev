'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FollowSchema extends Schema {
  up () {
    this.create('follows', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('follows')
  }
}

module.exports = FollowSchema
