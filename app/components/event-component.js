import Ember from 'ember';
import inject from 'ember-cli-injection/inject';

var injectSession = inject('session');

export default Ember.Component.extend({
  session: injectSession('main'),
  event: null,
  tracks: null,
  attended: false,
  attendedUpdate: function() {
    var didAttend = false;
    var that = this;
    this.get('session.user.attendedEvents').then(function(attendedEvents){
      attendedEvents.forEach(function(event){
        if(event === that.get('event')) {
          didAttend = true;
        }
      });
      that.set('attended', didAttend);
    });
  }.observes('event', 'session.user.attendedEvents').on('init'),

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
    checkIn: function() {
      this.sendAction('checkIn', this.get('event'));
    },
    cancelChange: function() {
      this.sendAction('onCancel', this.get('event'));
    }
  }
});
