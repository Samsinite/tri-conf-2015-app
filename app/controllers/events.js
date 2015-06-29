import Ember from 'ember';

export default Ember.Controller.extend({

	actions : {
    filter: function(trackName) {
      this.model.tracks.forEach(function(track){
        if(track.get('name') === trackName || trackName === "all"){
          track.set('isHidden', false);
        } else {
          track.set('isHidden', true);
        }
      });
    }
	}
});
