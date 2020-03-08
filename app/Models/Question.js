'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Question extends Model {
  user () {
    return this.belongsTo('App/Models/User', 'user_id', 'id')
  }
  coach () {
    return this.belongsTo('App/Models/SchoolCoach', 'legend_id', 'id')
  }
  legend () {
    return this.belongsTo('App/Models/Legend', 'legend_id', 'id')
  }
  answers () {
    return this.hasOne('App/Models/Answer', 'id', 'question_id')
  }
  allAnswers () {
    return this.hasMany('App/Models/Answer', 'id', 'question_id') .orderBy('id', 'desc')
  }
}

module.exports = Question
