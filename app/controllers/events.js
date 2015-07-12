import Ember from 'ember';
import { createSortableArray } from '../models/sortable-array';

export default Ember.Controller.extend({
  applicationController: Ember.inject.controller("application"),

  selectedLocation: {venue: "All Venues"},
  filterLocations: function() {
    var locationVenue = this.get('selectedLocation.venue');
    this.model.locations.forEach(function(location){
      if(location.get('venue') === locationVenue || locationVenue === "All Venues"){
        location.set('isHidden', false);
      } else {
        location.set('isHidden', true);
      }
    });
  }.observes('selectedLocation'),
  locationNames: function() {
    var allLocations = [{venue: "All Venues"}];
    this.model.locations.forEach(function(location) {
      if(! allLocations.find(function(i){return i.venue === location.get('venue');})) {
        allLocations.push({venue: location.get('venue')});
      }
    });
    return allLocations;
  }.property('model.locations.@each.venue'),


  selectedTrack: {name: "All Tracks", id: "all"},
  filterTracks: function() {
    var trackName = this.get('selectedTrack.name');
    this.model.tracks.forEach(function(track){
      if(track.get('name') === trackName || trackName === "All Tracks"){
        track.set('isHidden', false);
      } else {
        track.set('isHidden', true);
      }
    });
  }.observes('selectedTrack'),
  trackNames: function() {
    var allTracks = [{id: "all", name: "All Tracks"}];
    this.model.tracks.forEach(function(track) {
      allTracks.push(track);
    });
    return allTracks;
  }.property('model.tracks.@each.name'),

  searchString: "",

  sortedEvents: Ember.computed('model.events', function() {
    return createSortableArray(this.get('model.events'), ['date'], true);
  }),

  filterEvents: function() {
    var str = this.get('searchString').toLowerCase();
    var selectedTrack = this.get('selectedTrack.name');
    var selectedVenue = this.get('selectedLocation.venue');
    this.model.events.forEach(function(event){
      var title = (event.get('title') || "").toLowerCase();
      var speaker = (event.get('speaker') || "").toLowerCase();
      var description = (event.get('description') || "").toLowerCase();
      var trackName = event.get('track.name');
      var locationVenue = event.get('location.venue');
      var eventInSelectedTrack = trackName === selectedTrack || selectedTrack === "All Tracks";
      var eventInSelectedLocation = locationVenue === selectedVenue || selectedVenue === "All Venues";
      var eventInSearch = str === "" || title.indexOf(str) > -1 ||
          speaker.indexOf(str) > -1 || description.indexOf(str) > -1;
      if(eventInSelectedTrack && eventInSearch && eventInSelectedLocation) {
        event.set('isHidden', false);
      } else {
        event.set('isHidden', true);
      }
    });
  }.observes("selectedLocation", "selectedTrack", "searchString"),

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
          event.save();
        });
      }
    },
    bookmarkEvent : function(event){
      var user = this.get('session.user');
      if(!user) {
        var app = this.get('applicationController');
        app.showModal('login-modal');
      } else {
        user.get('bookmarkEvents').then(function(events) {
          if(events.indexOf(event) > -1) {
            events.removeObject(event);
          } else {
            events.pushObject(event);
          }
          user.save();
          event.save();
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
    },
    setLocation: function(locationName) {
      this.set('selectedLocation', locationName);
    }
	}
});
