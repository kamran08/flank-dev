'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class LegendSchedule extends Model {

    static formatDates (field, value) {
        if (field === 'date') {
          return value.format('YYYY-MM-DD')
        }
        return super.formatDates(field, value)
      }
}

module.exports = LegendSchedule
