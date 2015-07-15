import Ember from 'ember';
import DS from 'ember-data';
import removeUserRelation from './remove-user-relation';

export default DS.Model.extend(removeUserRelation, {
  track: DS.belongsTo('track', {async: true}),
  title: DS.attr('string', { defaultValue: function() {return "";} }),
  speaker: DS.attr('string', { defaultValue: function() {return "";} }),
  createdAt: DS.attr('date', { defaultValue: function() { return new Date(); } }),
  location: DS.belongsTo('location', {async: true}),
  date: DS.attr('date'),
  length: DS.attr('string', {defaultValue: function() {return "20 minutes";}}),
  description: DS.attr('string'),

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
