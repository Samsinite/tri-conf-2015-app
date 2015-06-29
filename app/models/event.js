import DS from 'ember-data';

export default DS.Model.extend({
  track: DS.belongsTo('track', {async: true}),
  title: DS.attr('string'),
  speaker: DS.attr('string'),
  day: DS.attr('string'),
  time: DS.attr('string'),
  location: DS.belongsTo('location', {async: true}),
  attendees: DS.hasMany('user', {async: true})
});
