import Ember from 'ember';

export default Ember.Controller.extend({
	isExpanded: false,
	actions : {
	    closeMenu: function() {
        this.set('isExpanded', false);
      },
      openMenu: function() {
        this.set('isExpanded', true);
      },
      menuLoad: function(route) {
        this.transitionToRoute(route);
        this.set('isExpanded', false);
      }
	  }
});
