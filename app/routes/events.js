import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return Ember.RSVP.hash({
      events: this.store.findAll('event'),
      locations: this.store.findAll('location'),
      tracks: this.store.findAll('track')
    });
	}
});
