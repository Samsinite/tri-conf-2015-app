import Ember from 'ember';
import inject from 'ember-cli-injection/inject';

var injectSession = inject('session');

export default Ember.Component.extend({
  session: injectSession('main'),
  event: null,
  tracks: null,

  actions: {
    editEvent: function(){
      this.sendAction('onEdit', this.get('event'));
    },
    removeEvent: function(){
      this.sendAction('onRemove', this.get('event'));
    },
    saveEvent: function() {
      this.sendAction('onSave', this.get('event'));
    },
    trackChanged: function(trackName) {
      this.sendAction('trackChanged', this.get('event'), trackName);
    }
  }
});
