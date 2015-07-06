import DS from 'ember-data';

export default DS.Model.extend({
  track: DS.belongsTo('track', {async: true}),
  title: DS.attr('string'),
  speaker: DS.attr('string'),
  createdAt: DS.attr('date', { defaultValue: function() { return new Date(); } }),
  location: DS.belongsTo('location', {async: true}),
  attendees: DS.hasMany('user', {async: true}),
  date: DS.attr('date'),

  saveDate: null,
  displayDate: function(key, value, oldValue) {
    if(arguments.length > 1) {
      this.set('saveDate', value);
    }
    return this.get('date');
  }.property('date'),

});
