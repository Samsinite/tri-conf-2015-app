import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  track: DS.belongsTo('track', {async: true}),
  title: DS.attr('string', { defaultValue: function() {return "";} }),
  speaker: DS.attr('string', { defaultValue: function() {return "";} }),
  createdAt: DS.attr('date', { defaultValue: function() { return new Date(); } }),
  location: DS.belongsTo('location', {async: true}),
  attendees: DS.hasMany('user', {async: true}),
  date: DS.attr('date'),

  saveDate: null,
  displayDate: Ember.computed('date', {
    set: function(key, value) {
      this.set('saveDate', value);
      return value;
    },
    get: function() {
      return this.get('date');
    }
  }),

});
