import DS from 'ember-data';

export default DS.Model.extend({
  attendedEvents: DS.hasMany('event', {async: true}),
  ateAt: DS.hasMany('restaurant', {async: true}),
  achieved: DS.hasMany('challenge', {async: true}),
  points: DS.attr('number'),
  displayName: DS.attr('string'),
  isAdmin: DS.attr('boolean', { readOnly: true })
});
