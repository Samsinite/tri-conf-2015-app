import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return Ember.RSVP.hash({
      events: this.store.findAll('event'),
      tracks: this.store.findAll('track')
    });
	}
});
