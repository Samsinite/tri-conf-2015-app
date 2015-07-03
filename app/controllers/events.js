import Ember from 'ember';
import { createSortableArray } from '../models/sortable-array';

export default Ember.Controller.extend({
  editingEvent: null,
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
    editEvent: function(event){
      if(this.get('editingEvent')) {
        this.editingEvent.set('isEditing', false);
      }
      event.set('isEditing', true);
      this.editingEvent = event;
    },
    cancelChange: function(event){
      event.rollback();
      if(this.get('editingEvent') === event) {
        this.set('editingEvent', null);
      }
      event.set('isEditing', false);
    },
    removeEvent: function(event){
      if(this.editingEvent === event) {
        this.editingEvent = null;
      }
      if (window.confirm(`Are you sure you want to delete event ${event.get('title')}? This action cannot be undone.`)) {
        event.destroyRecord();
      }
    },
    createEvent: function() {
      if(this.editingEvent) {
        this.editEvent.set('isEditing', false);
      }
      this.editingEvent = this.store.createRecord('event');
      this.editingEvent.set('isEditing', true);
    },
    saveEvent: function(event) {
      event.save();
      event.set('isEditing', false);
      this.editingEvent = null;
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
