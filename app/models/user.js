import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  attendedEvents: DS.hasMany('event', {async: true}),
  bookmarkEvents: DS.hasMany('event', {async: true}),
  ateAt: DS.hasMany('restaurant', {async: true}),
  achieved: DS.hasMany('challenge', {async: true}),
  displayName: DS.attr('string'),
  isAdmin: DS.attr('boolean', { readOnly: true }),
  numEvents: Ember.computed('attendedEvents', {
    get: function() {
      return this.get('attendedEvents.length');
    }
  }),
  numRestaurants: Ember.computed('ateAt', {
    get: function() {
      return this.get('ateAt.length');
    }
  }),
  numBookmarks: Ember.computed('bookmarkEvents', {
    get: function() {
      return this.get('bookmarkEvents.length');
    }
  }),
  numAchieved: Ember.computed('achieved', {
    get: function() {
      return this.get('achieved.length');
    }
  }),
  totalScore: Ember.computed('numEvents', 'numRestaurants', 'numBookmarks', 'numAchieved', {
    get: function() {
      return  this.get('numEvents') +
              this.get('numRestaurants') +
              this.get('numBookmarks') +
              this.get('numAchieved');
    }
  }),
});
