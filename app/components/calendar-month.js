import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  classNames: ['calendar-month-component'],
  day: moment(),

  momentDay: Ember.computed('day', function() {
    return moment(this.get('day'));
  }),

  dayInWeekNumber: Ember.computed('momentDay', function() {
    var momentDay = this.get('momentDay');

    if (momentDay) {
      momentDay.day();
    }
  }),

  monthNumber: Ember.computed('momentDay', function() {
    var momentDay = this.get('momentDay');

    if (momentDay) {
      return momentDay.month();
    }
  }),

  yearNumber: Ember.computed('momentDay', function() {
    var momentDay = this.get('momentDay');

    if (momentDay) {
      return momentDay.year();
    }
  }),

  dayInMonthNumber: Ember.computed('momentDay', function() {
    var momentDay = this.get('momentDay');

    if (momentDay) {
      return momentDay.date();
    }
  }),

  daysInMonth: Ember.computed('momentDay', function() {
    var momentDay = this.get('momentDay');

    if (momentDay) {
      return momentDay.daysInMonth();
    }
  }),

  /*
   * Returns month rows, like so:
   *                   May 2015
   *     S    M     T     W     T     F     S
   * [
   *   [null, null, null, null, null,  1  ,  2  ],
   *   [ 3  ,  4  ,  5  ,  6  ,  7  ,  8  ,  9  ],
   *   [ 10 ,  11 ,  12 ,  13 ,  14 ,  15 ,  16 ],
   *   [ 17 ,  18 ,  19 ,  20 ,  21 ,  22 ,  23 ],
   *   [ 24 ,  25 ,  26 ,  27 ,  28 ,  29 ,  30 ],
   *   [ 31 , null, null, null, null, null, null]
   * ]
   *
   * only if there is a day in that spot it is the moment() value of that day
   */
  rows: Ember.computed('momentDay', 'yearNumber', 'monthNumber', 'daysInMonth', function() {
    var momentDay = this.get('momentDay');

    if (momentDay) {
      var yearNumber = this.get('yearNumber');
      var monthNumber = this.get('monthNumber');
      var daysInMonth = this.get('daysInMonth');
      var rows = [];
      var row = [];
      var i;
      var day;

      for (i = 1; i <= daysInMonth; i++) {
        day = moment({year: yearNumber, month: monthNumber, day: i});
        row.push(day);

        /* 6 is the last day of the week (saturday)
         * TODO: Make the number/start day of week flexible
         */
        if (day.day() === 6) {
          rows.push(row);
          row = [];
        }
      }

      // Append remaining null values to last row
      for (i = row.length; i < 7; i++) {
        row.push(null);
      }
      rows.push(row);

      // Prepend remaining null values to first row
      row = rows[0];
      for (i = row.length; i < 7; i++) {
        row.unshift(null);
      }

      return rows;
    }
  }),

  actions: {
    selectDay: function(day) {
      this.set('day', day);
    },

    moveTimeRangeBack: function() {
        var yearNumber = this.get('yearNumber');
        var previousMonthNumber = this.get('monthNumber') - 1;

        if (previousMonthNumber < 0) {
          previousMonthNumber = 11;
          yearNumber = yearNumber - 1;
        }

        var newDay = moment({year: yearNumber, month: previousMonthNumber, day: 1});

        this.set('day', newDay);
    },

    moveTimeRangeForward: function() {
        var yearNumber = this.get('yearNumber');
        var nextMonthNumber = this.get('monthNumber') + 1;

        if (nextMonthNumber > 11) {
          nextMonthNumber = 0;
          yearNumber = yearNumber + 1;
        }

        var newDay = moment({year: yearNumber, month: nextMonthNumber, day: 1});

        this.set('day', newDay);
    }
  }
});
