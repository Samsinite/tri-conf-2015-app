import Ember from 'ember';

export default Ember.Controller.extend({
	isExpanded: false,
	expand : function() {
      	jQuery('#top-menu').removeClass('lowered').addClass('raised');
      	this.set('isExpanded', false);
	},
	actions : {
	    closeMenu: function() {
	    	this.expand();
	      },
	      openMenu: function() {
	      	//jQuery('#top-menu ul').removeClass('slideOutUp').addClass('animated slideInDown');
	      	jQuery('#top-menu').removeClass('raised').addClass('lowered');
	        this.set('isExpanded', true);
	      },
	      loadRoot : function(){
	      	this.transitionToRoute('events');
	      	this.expand();
	      },
	      loadLocalEats : function(){
	      	this.transitionToRoute('local-eats');
	      	this.expand();
	      },
	      loadLeaderboards : function(){
	      	this.transitionToRoute('leaderboard');
	      	this.expand();
	      },
	      loadAchievements : function(){
	      	this.transitionToRoute('achievements');
	      	this.expand();
	      },
	  }
});
