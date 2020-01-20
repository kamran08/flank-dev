'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmailSubscriptionSchema extends Schema {
  up () {
    this.create('email_subscriptions', (table) => {
      table.increments()
      table.string('email')
      table.timestamps()
    })
  }

  down () {
    this.drop('email_subscriptions')
  }
}

module.exports = EmailSubscriptionSchema
