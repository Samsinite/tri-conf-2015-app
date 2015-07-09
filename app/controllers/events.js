import Ember from 'ember';
import { createSortableArray } from '../models/sortable-array';

export default Ember.Controller.extend({
  applicationController: Ember.inject.controller("application"),
  selectedTrack: "all",
  filterTracks: function() {
    var trackName = this.get('selectedTrack');
    this.model.tracks.forEach(function(track){
      if(track.get('name') === trackName || trackName === "all"){
        track.set('isHidden', false);
      } else {
        track.set('isHidden', true);
      }
    });
  }.observes('selectedTrack'),
  allTracksHidden: function() {
    return this.get('selectedTrack') !== "all";
  }.property('selectedTrack'),
  searchString: "",

  sortedEvents: Ember.computed('model.events', function() {
    return createSortableArray(this.get('model.events'), ['date'], true);
  }),

  filterEvents: function() {
    var str = this.get('searchString').toLowerCase();
    var selectedTrack = this.get('selectedTrack');
    this.model.events.forEach(function(event){
      var title = (event.get('title') || "").toLowerCase();
      var speaker = (event.get('speaker') || "").toLowerCase();
      var trackName = event.get('track.name');
      var eventInSelectedTrack = trackName === selectedTrack || selectedTrack === "all";
      var eventInSearch = str === "" || title.indexOf(str) > -1 || speaker.indexOf(str) > -1;
      if(eventInSelectedTrack && eventInSearch) {
        event.set('isHidden', false);
      } else {
        event.set('isHidden', true);
      }
    });
  }.observes("selectedTrack", "searchString"),

	actions : {
    checkIn : function(event){
      var user = this.get('session.user');
      if(!user) {
        var app = this.get('applicationController');
        app.showModal('login-modal');
      } else {
        user.get('attendedEvents').then(function(events) {
          if(events.indexOf(event) > -1) {
            events.removeObject(event);
          } else {
            events.pushObject(event);
          }
          user.save();
        });
      }
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
      if(event.get('saveDate')) {
        event.set('date', event.get('saveDate'));
      }
      event.save();
    },
    setTrack: function(trackName) {
      this.set('selectedTrack', trackName);
    }
	}
});
