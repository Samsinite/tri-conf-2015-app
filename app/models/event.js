import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
	track: DS.belongsTo('track', {async: true}),
	title: DS.attr('string'),
	speaker: DS.attr('string'),
	day: DS.attr('string'),
	time: DS.attr('string'),
	location: DS.belongsTo('location', {async: true}),
	userEvents: DS.hasMany ('event-user'),
  events: Ember.computed('userEvents', function() {
    var userEventsPromise = this.get('userEvents');

    if (userEventsPromise) {
      return DS.PromiseArray.create({
        promise: userEventsPromise.then(function(userEvents) {
          var promiseArray = [];

          userEvents.forEach(function(userEvent) {
            var eventPromise = Ember.get(userEvent, 'user');

            if (eventPromise) {
              promiseArray.push(userEventsPromise);
            }
          });

          return Ember.RSVP.all(promiseArray);
        })
      });
    }
  })
});
