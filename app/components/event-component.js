import Ember from 'ember';
import inject from 'ember-cli-injection/inject';

var injectSession = inject('session');

export default Ember.Component.extend({
  session: injectSession('main'),
  event: null,
  tracks: null,
  attended: false,
  saveDate: null,
  displayDate: function(key, value, oldValue) {
    if(arguments.length > 1) {
      this.set('saveDate', value);
    }
    return this.get('event.date');
  }.property('event.date'),
  attendedUpdate: function() {
    if(this.get('session.isAuthenticated')) {
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
    }
  }.observes('event', 'session.user.attendedEvents').on('init'),

  actions: {
    editEvent: function(){
      this.sendAction('onEdit', this.get('event'));
    },
    removeEvent: function(){
      this.sendAction('onRemove', this.get('event'));
    },
    saveEvent: function() {
      if(this.get('saveDate') !== null) {
        this.set('event.date', this.get('saveDate'));
      }
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
