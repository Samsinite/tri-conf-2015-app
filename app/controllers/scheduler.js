import Ember from 'ember';
import moment from 'moment';
import { startOfDay } from '../helpers/start-of-day';
import { endOfDay } from '../helpers/end-of-day';

export default Ember.Controller.extend({
  calendarDay: moment(),
  eventsDay: moment(),

  startOfEventsDay: Ember.computed('eventsDay', function() {
    var eventsDay = this.get('eventsDay');

    return startOfDay(eventsDay);
  }),

  endOfEventsDay: Ember.computed('eventsDay', function() {
    var eventsDay = this.get('eventsDay');

    return endOfDay(eventsDay);
  }),

  actions: {
    daySelected: function(day) {
      this.set('eventsDay', day);
    },

    eventSelected: function(event) {
      this.transitionToRoute('events.edit', event);
    },

    addEvent: function() {
      this.transitionToRoute('events.new');
    },

    destroyEvent: function(event) {
      if (window.confirm(`Are you sure you want to delete event ${event.get('title')}? This action cannot be undone.`)) {
        event.destroyRecord();
      }
    }
  }
});
