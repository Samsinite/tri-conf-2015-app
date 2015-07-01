import Ember from 'ember';

export default Ember.Controller.extend({
	isAllEventsHidden : false,
	isCultureEventsHidden : false,
	isCommunityEventsHidden : false,
	isDesignEventsHidden : false,
	isEntrepreneurshipEventsHidden : false,
	isTechnologyEventsHidden : false,
	eventType : function() {
		console.log(true);
		return true;
	},
	actions : {
		filterAll : function(){
			this.set('isAllEventsHidden', !this.get('isAllEventsHidden'));
		},
		filterCulture : function(){
			this.set('isCultureEventsHidden', !this.get('isCultureEventsHidden'));
		},
		filterCommunity : function(){
			this.set('isCommunityEventsHidden', !this.get('isCommunityEventsHidden'));
		},
		filterDesign : function(){
			this.set('isDesignEventsHidden', !this.get('isDesignEventsHidden'));
		},
		filterEntrepreneurship : function() {
			this.set('isEntrepreneurshipEventsHidden', !this.get('isEntrepreneurshipEventsHidden'));
		},
		filterTechnology : function() {
			this.set('isTechnologyEventsHidden', !this.get('isTechnologyEventsHidden'));
		},
    checkIn : function(event){
      event.toggleProperty('checkedIn');
    }
	}
});
