import Ember from 'ember';
import { padNumber } from '../helpers/pad-number';

function generateMinutes() {
  var minutes = [];

  for (var i = 0; i <= 59; i++) {
    minutes.push(padNumber(i, 2));
  }

  return minutes;
}

export default Ember.Component.extend({
  classNames: ['form-group', 'bootstrap-select-time-component'],
  selectionHours: ['12', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
  selectionMinutes: generateMinutes(),
  selectionTimeOfDay: ['AM', 'PM'],

  actions: {
    hourSelected: function(value) {
      this.sendAction('on-hour-selected', value);
    },

    minuteSelected: function(value) {
      this.sendAction('on-minute-selected', value);
    },

    timeOfDaySelected: function(value) {
      this.sendAction('on-time-of-day-selected', value);
    }
  }
});
