import DS from 'ember-data';

export default DS.Model.extend({
  attendedEvents: DS.hasMany('event', {async: true}),
  points: DS.attr('number'),
  displayName: DS.attr('string'),
  isAdmin: DS.attr('boolean', { readOnly: true })
});
