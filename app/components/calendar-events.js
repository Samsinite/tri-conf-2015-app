import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['calendar-events-component'],
  title: "May 17th",
  start: null, // should be either a date or moment object
  end: null,   // should be either a date or moment object

  workoutEvents: Ember.computed('start', 'end',  function() {
    var start = this.get('start');
    var end = this.get('end');

    console.log('finding events that occur from ', start.toString(), ' to ', end.toString());
    if (start && end) {
      return this.get('store').find('workout-event', { start: start, end: end });
    } else {
      return [];
    }
  }),

  actions: {
    add: function() {
      this.sendAction('on-add');
    }
  }
});
