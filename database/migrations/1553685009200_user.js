'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', table => {
      table.increments()
      table.string('firstName', 80).notNullable()
      table.string('lastName', 80).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()

      table.string('birthday', 254).nullable()
      table.string('zip', 60).nullable()
      table.integer('packType', 60).notNullable()
      table.string('accountActivationToken', 60).nullable()
      table.string('passwordToken', 60).nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
