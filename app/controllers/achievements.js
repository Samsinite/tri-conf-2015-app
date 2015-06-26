import Ember from 'ember';

export default Ember.Controller.extend({
	bikingLevel : 1,
	shuttlingLevel : 1,
	walkingLevel : 1,
	fuse : true,
	johnDamPlaza : true,
	adventuresUnderground : true,
	uptownTheater : true,
	richlandPublicLibrary : true,
	filmLevel : 1,
	fridayMusic : true,
	saturdayMusic : true,
	cultureArtsMusic : true,
	communityIssuesSustainability : true,
	technology : true,
	designCommunication : true,
	entrepreneurship : true,
	allLocations : function(){
		if (this.get('fuse') && this.get('johnDamPlaza') && this.get('adventuresUnderground') && this.get('uptownTheater') && this.get('richlandPublicLibrary')) {
			return true;
		} else {
			return false;
		}
	}.property('fuse', 'johnDamPlaza', 'adventuresUnderground', 'uptownTheater', 'richlandPublicLibrary'),
	allMusic : function(){
		if (this.get('fridayMusic') && this.get('saturdayMusic')) {
			return true;
		} else {
			return false;
		}
	}.property('fridayMusic', 'saturdayMusic'),
	allTalks : function(){
		if (this.get('cultureArtsMusic') && this.get('communityIssuesSustainability') && this.get('technology') && this.get('designCommunication') && this.get('entrepreneurship')) {
			return true;
		} else {
			return false;
		}
	}.property('cultureArtsMusic', 'communityIssuesSustainability', 'technology', 'designCommunication', 'entrepreneurship'),
	bikingQuote : function() {
		switch(this.get('bikingLevel')) {
			case 3:
				return '<p>"I am a bike enthusiast; there\'s a certain amount of romance to bikes. They\'re both beautiful and utilitarian." – Dave Eggers</p>';
			case 2:
				return '<p>"I can think. I can sleep. I can move. I can ride my bike. I can dream." &#8212; Bill Walton</p>';
			case 1:
				return '<p>"If you worried about falling off the bike, you\'d never get on." &#8212; Lance Armstrong</p>';
			default:
				return false;
		}
	}.property('bikingLevel'),
	bikingShuttlingWalking : function(){
		if((this.get('bikingLevel') > 0) && (this.get('shuttlingLevel') > 0) && (this.get('walkingLevel') > 0)) {
			return true;
		}

		return false;
	}.property('bikingLevel','shuttlingLevel','walkingLevel'),
	bikingStars : function() {
		var numStars = this.stars(this.get('bikingLevel'));
		return numStars;
	}.property('bikingLevel'),
	filmQuote : function() {
		switch(this.get('filmLevel')) {
			case 3:
				return '<p>"Filmmaking, like any other art, is a very profound means of human communication; beyond the professional pleasure of succeeding or the pain of failing, you do want your film to be seen, to communicate itself to other people." &#8212; Kenneth Lonergan</p>';
			case 2:
				return '<p>"A film is &#8212; or should be &#8212; more like music than like fiction. It should be a progression of moods and feelings." &#8212; Stanley Kubrick</p>';
			case 1:
				return '<p>"A film is never really good unless the camera is an eye in the head of a poet." &#8212; Orson Welles</p>';
			default:
				return false;
		}
	}.property('filmLevel'),
	filmStars : function() {
		var numStars = this.stars(this.get('filmLevel'));
		return numStars;
	}.property('filmLevel'),
	shuttlingQuote : function() {
		switch(this.get('shuttlingLevel')) {
			case 3:
				return '<p>"The ride might not be as predictable if you\'d just planted your feet and stayed put, but it will be a heck of a lot more interesting." – Edward Whitacre, Jr.</p>';
			case 2:
				return '<p>"Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down." – Oprah Winfrey</p>';
			case 1:
				return '<p>"I think the thing to do is enjoy the ride while you\'re on it." – Johnny Depp</p>';			
			default:
				return false;
		}
	}.property('shuttlingLevel'),
	shuttlingStars : function() {
		var numStars = this.stars(this.get('shuttlingLevel'));
		return numStars;
	}.property('shuttlingLevel'),
	stars : function(numStars){
		switch(numStars) {
			case 3:
				return '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>';
			case 2:
				return '<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i>';
			case 1:
				return '<i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>';
			default:
				return '<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>';
		}
	},
	walkingStars : function() {
		var numStars = this.stars(this.get('walkingLevel'));
		return numStars;
	}.property('walkingLevel'),
	walkingQuote : function() {
		switch(this.get('walkingLevel')) {
			case 3:
				return '<p>"Every man must decide whether he will walk in the light of creative altruism or in the darkness of destructive selfishness." &#8212; Martin Luther King, Jr.</p>';
			case 2:
				return '<p>"An early-morning walk is a blessing for the whole day." &#8212; Henry David Thoreau</p>';
			case 1:
				return '<p>"We ourselves must walk the path." &#8212; Buddha</p>';
			default:
				return false;
		}
	}.property('walkingLevel'),
	actions : { //all of these actions can be deleted. For testing purposes only
		changeBoolean : function(tempVar) {
			this.set(`${tempVar}`, !this.get(`${tempVar}`));
		},
		changeStars : function(method) {
			if (this.get(`${method}Level`) < 3) {
				this.set(`${method}Level`, this.get(`${method}Level`) + 1);
			} else {
				this.set(`${method}Level`, 0);
			}
		}		
	}
});
