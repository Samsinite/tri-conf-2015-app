import Ember from 'ember';
import { createSortableArray } from '../models/sortable-array';

export default Ember.Controller.extend({
  applicationController: Ember.inject.controller("application"),

  sortedEvents: Ember.computed('session.user.bookmarkEvents', function() {
    return createSortableArray(this.get('session.user.bookmarkEvents'), ['date'], true);
  }),

	actions : {
    checkIn : function(event){
      var user = this.get('session.user');
      if(!user) {
        var app = this.get('applicationController');
        app.showModal('login-modal');
      } else {
        user.get('attendedEvents').then(function(events) {
          if(events.indexOf(event) > -1) {
            events.removeObject(event);
          } else {
            events.pushObject(event);
          }
          user.save();
          event.save();
        });
      }
    },
    bookmarkEvent : function(event){
      var user = this.get('session.user');
      if(!user) {
        var app = this.get('applicationController');
        app.showModal('login-modal');
      } else {
        user.get('bookmarkEvents').then(function(events) {
          if(events.indexOf(event) > -1) {
            events.removeObject(event);
          } else {
            events.pushObject(event);
          }
          user.save();
          event.save();
        });
      }
    },
    login: function(provider) {
      return this.get("session").login(provider);
    },
    logout: function() {
      this.get('session').logout();
    },
	}
});
