import Ember from 'ember';
import ResetScroll from '../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
	model: function() {
		return Ember.RSVP.hash({
      events: this.store.findAll('event'),
      locations: this.store.findAll('location'),
      tracks: this.store.findAll('track')
    });
	},
   setupController: function(controller, model) {
      controller.set("model",model);
      controller.filterEvents();
   }
});
