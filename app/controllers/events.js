import Ember from 'ember';
import { createSortableArray } from '../models/sortable-array';

export default Ember.Controller.extend({
  allTracksHidden: false,

  sortedEvents: Ember.computed('model.events', function() {
    return createSortableArray(this.get('model.events'), ['date'], true);
  }),

	actions : {
    checkIn : function(event){
      var user = this.get('session.user');
      user.get('attendedEvents').then(function(events) {
        if(events.indexOf(event) > -1) {
          events.removeObject(event);
        } else {
          events.pushObject(event);
        }
        user.save();
      });
    },
    cancelChange: function(event){
      event.rollback();
    },
    removeEvent: function(event){
      if (window.confirm(`Are you sure you want to delete event ${event.get('title')}? This action cannot be undone.`)) {
        event.destroyRecord();
      }
    },
    createEvent: function() {
      this.editingEvent = this.store.createRecord('event');
    },
    saveEvent: function(event) {
      event.set('date', event.get('saveDate'));
      event.save();
    },
    filter: function(trackName) {
      if(trackName === "all") {
        this.set('allTracksHidden', false);
      } else {
        this.set('allTracksHidden', true);
      }
      this.model.tracks.forEach(function(track){
        if(track.get('name') === trackName || trackName === "all"){
          track.set('isHidden', false);
        } else {
          track.set('isHidden', true);
        }
      });
    }
	}
});
