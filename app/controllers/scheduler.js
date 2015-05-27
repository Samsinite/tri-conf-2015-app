import Ember from 'ember';
import moment from 'moment';
import { startOfDay } from '../helpers/start-of-day';
import { endOfDay } from '../helpers/end-of-day';

export default Ember.Controller.extend({
  selectedDay: moment(),

  actions: {
    daySelected: function(day) {
      this.set('selectedDay', day);
    },

    eventSelected: function(event) {
      this.transitionToRoute('events.edit', event);
    },

    addEvent: function() {
      var eventsDay = moment(this.get('eventsDay'));
      this.transitionToRoute('events.new', { queryParams: { day: eventsDay.toString() } });
    },

    destroyEvent: function(event) {
      if (window.confirm(`Are you sure you want to delete event ${event.get('title')}? This action cannot be undone.`)) {
        event.destroyRecord();
      }
    }
  }
});
