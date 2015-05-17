import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  classNames: ['calendar-month-component'],
  selectedDay: moment(),

  selectedMomentDay: Ember.computed('selectedDay', function() {
    return moment(this.get('selectedDay'));
  }),

  selectedMomentMonth: Ember.computed('selectedMomentDay', function() {
    var selectedMomentDay = this.get('selectedMomentDay');

    return moment([selectedMomentDay.year(), selectedMomentDay.month()]);
  }),

  daysInMonth: Ember.computed('selectedMomentDay', function() {
    var selectedMomentMonth = this.get('selectedMomentMonth');

    if (selectedMomentMonth) {
      return selectedMomentMonth.daysInMonth();
    }
  }),

  rows: Ember.computed('selectedMomentMonth', 'daysInMonth', function() {
    var selectedMomentMonth = this.get('selectedMomentMonth');
    var daysInMonth = this.get('daysInMonth');


  })
});
