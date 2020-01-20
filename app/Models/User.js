'use strict'

const Model = use('Model')
const Database = use('Database')

class User extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to bash the user password before saving
     * it to the database.
     *
     * Look at `app/Models/Hooks/User.js` file to
     * check the hashPassword method
     */
    this.addHook('beforeSave', 'User.hashPassword')
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  reviews () {
    return this.hasMany('App/Models/Review', 'id', 'reviwer_id').limit(3)
  }
  ratinginfo () {
    return this.hasMany('App/Models/Review', 'id', 'reviwer_id').select('id', 'reviwer_id', 'rating')
  }
  imosCount () {
    return this.hasOne('App/Models/Reviewimo').select('id', 'user_id', Database.raw('sum(cool)   AS cool'), Database.raw('sum(funny)   AS funny'), Database.raw('sum(useful)   AS useful'))
  }
  tokens () {
    return this.hasMany('App/Models/Token')
  }
  legend () {
    return this.belongsTo('App/Models/Legend', 'id', 'user_id')
  }
  static get hidden () {
    return ['password', 'passwordToken', 'accountActivationToken']
  }

}

module.exports = User
