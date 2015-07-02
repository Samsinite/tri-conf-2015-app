import Ember from 'ember';
import { createSortableArray } from '../models/sortable-array';

export default Ember.Controller.extend({
  editingEvent: null,
  allTracksHidden: false,

  sortedEvents: Ember.computed('model.events', function() {
    return createSortableArray(this.get('model.events'), ['createdAt'], false);
  }),

	actions : {
    checkIn : function(event){
       event.toggleProperty('checkedIn');
    },
    editEvent: function(event){
      if(this.editingEvent){
        this.editingEvent.set('isEditing', false);
      }
      event.set('isEditing', true);
      this.editingEvent = event;
    },
    removeEvent: function(event){
      if(this.editingEvent === event) {
        this.editingEvent = null;
      }
      event.destroyRecord();
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
