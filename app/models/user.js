import DS from 'ember-data';

export default DS.Model.extend({
  attendedEvents: DS.hasMany('event', {async: true}),
  bookmarkEvents: DS.hasMany('event', {async: true}),
  ateAt: DS.hasMany('restaurant', {async: true}),
  achieved: DS.hasMany('challenge', {async: true}),
  displayName: DS.attr('string'),
  isAdmin: DS.attr('boolean', { readOnly: true }),
  numEvents() {
    return this.get('attendedEvents').length;
  }.property('attendedEvents'),
  numBookmarks() {
    return this.get('attendedEvents').length;
  }.property('attendedEvents'),
  numRestaurants() {
    return this.get('ateAt').length;
  }.property('ateAt'),
  numAchieved() {
    return this.get('achieved').length;
  }.property('achieved'),
  totalChecks() {
    return this.get('attendedEvents').length +
            this.get('bookmarkEvent').length +
            this.get('ateAt').length +
            this.get('achieved').length;
  }.property('attendedEvents', 'bookmarkEvent', 'ateAt', 'achieved'),
});
