import Ember from 'ember';

export default Ember.Route.extend({
	toggleEvents : function(buttonClass, eventClass) {
		if(jQuery(buttonClass).hasClass('disabled')) {
			jQuery(eventClass).parent().parent().show();
			jQuery(buttonClass).removeClass('disabled');
		} else {
			jQuery(eventClass).parent().parent().hide();
			jQuery(buttonClass).addClass('disabled');
		}
	},
	model: function() {
		return this.store.findAll('event');
	},
	actions : {
		filterAll : function(){
			this.toggleEvents('.pill-triconf', '.event');
		},
		filterCulture : function(){
			this.toggleEvents('.pill-music', '.music');
		},
		filterCommunity : function(){
			this.toggleEvents('.pill-activism', '.activism');
		},
		filterDesign : function(){
			this.toggleEvents('.pill-art-and-design', '.art-and-design');
		},
		filterEntrepreneurship : function() {
			this.toggleEvents('.pill-entrepreneurship', '.entrepreneurship');
		}
	}
});
