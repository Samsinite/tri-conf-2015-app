import Ember from 'ember';

export default Ember.Controller.extend({
  walkingLevel: 0,
  walkingQuotes: {
    '0': null,
    '1': '"We ourselves must walk the path." &#8212; Buddha',
    '2': '"An early-morning walk is a blessing for the whole day." &#8212; Henry David Thoreau',
    '3': '"Every man must decide whether he will walk in the light of creative altruism or in the darkness of destructive selfishness." &#8212; Martin Luther King, Jr.'
  },

  bikingLevel: 0,
  bikingQuotes: {
    '0': null,
    '1': '"If you worried about falling off the bike, you\'d never get on." &#8212; Lance Armstrong',
    '2': '"I can think. I can sleep. I can move. I can ride my bike. I can dream." &#8212; Bill Walton',
    '3': '"I am a bike enthusiast; there\'s a certain amount of romance to bikes. They\'re both beautiful and utilitarian." – Dave Eggers'
  },

  filmLevel: 0,
  filmQuotes: {
    '0': null,
    '1': '"A film is never really good unless the camera is an eye in the head of a poet." &#8212; Orson Welles',
    '2': '"A film is &#8212; or should be &#8212; more like music than like fiction. It should be a progression of moods and feelings." &#8212; Stanley Kubrick',
    '3': '"Filmmaking, like any other art, is a very profound means of human communication; beyond the professional pleasure of succeeding or the pain of failing, you do want your film to be seen, to communicate itself to other people." &#8212; Kenneth Lonergan',
  },

  shuttlingLevel : 0,
  shuttlingQuotes: {
    '0': null,
    '1': '"I think the thing to do is enjoy the ride while you\'re on it." – Johnny Depp',
    '2': '"Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down." – Oprah Winfrey',
    '3': '"The ride might not be as predictable if you\'d just planted your feet and stayed put, but it will be a heck of a lot more interesting." – Edward Whitacre, Jr.'
  },

  fuse : true,
  johnDamPlaza : true,
  adventuresUnderground : true,
  uptownTheater : true,
  richlandPublicLibrary : true,
  fridayMusic : true,
  saturdayMusic : true,
  cultureArtsMusic : true,
  communityIssuesSustainability : true,
  technology : true,
  designCommunication : true,
  entrepreneurship : true,
  allLocations : Ember.computed(
    'fuse',
    'johnDamPlaza',
    'adventuresUnderground',
    'uptownTheater',
    'richlandPublicLibrary',
    function() {
      if (this.get('fuse') &&
          this.get('johnDamPlaza') &&
          this.get('adventuresUnderground') &&
          this.get('uptownTheater') &&
          this.get('richlandPublicLibrary')) {
        return true;
      } else {
        return false;
      }
    }
  ),
  allMusic : Ember.computed('fridayMusic', 'saturdayMusic', function() {
    if (this.get('fridayMusic') && this.get('saturdayMusic')) {
      return true;
    } else {
      return false;
    }
  }),
  allTalks : Ember.computed(
    'cultureArtsMusic',
    'communityIssuesSustainability',
    'technology',
    'designCommunication',
    'entrepreneurship',
    function() {
      if (this.get('cultureArtsMusic') &&
          this.get('communityIssuesSustainability') &&
          this.get('technology') &&
          this.get('designCommunication') &&
          this.get('entrepreneurship')) {
        return true;
      } else {
        return false;
      }
    }
  ),
  bikingShuttlingWalking : Ember.computed('bikingLevel', 'shuttlingLevel', 'walkingLevel', function() {
      if((this.get('bikingLevel') > 0) && (this.get('shuttlingLevel') > 0) && (this.get('walkingLevel') > 0)) {
          return true;
      }

      return false;
  }),

  actions : {
    incrementWalking: function() {
      this.set('walkingLevel', this.get('walkingLevel') + 1);
    },

    incrementBiking: function() {
      this.set('bikingLevel', this.get('bikingLevel') + 1);
    },

    incrementFilm: function() {
      this.set('filmLevel', this.get('filmLevel') + 1);
    },

    incrementShuttling: function() {
      this.set('shuttlingLevel', this.get('shuttlingLevel') + 1);
    },
  }
});
