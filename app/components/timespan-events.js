import Ember from 'ember';

/*
 * Just a component that looks up and iterates/loops over events that occur
 * during its date/time span. The passed block to this component is rendered
 * for each event that occurs.
 */

export default Ember.Component.extend({
  classNames: ['day-events-component'],
  start: null, // should be either a date or moment object
  end: null,   // should be either a date or moment object

  workoutEvents: Ember.computed('start', 'end',  function() {
    var start = this.get('start');
    var end = this.get('end');

    if (start && end) {
      return this.get('store').find('workout-event', { start: start, end: end });
    } else {
      return [];
    }
  })
});
