import Ember from 'ember';
import inject from 'ember-cli-injection/inject';

var injectSession = inject('session');

export default Ember.Component.extend({
  classNames: ["col-xs-4", "check-in"],
  session: injectSession('main'),
  activity: null,
  activityList: null,

  completed: function () {
    var didComplete = false;
    var that = this;
    if(this.get('activityList')) {
      this.get('activityList').forEach(function(activity){
        if(activity === that.get('activity')) {
          didComplete = true;
        }
      });
    }
    return didComplete;
  }.property('activityList', 'activity'),

  actions: {
    checkIn: function() {
      this.sendAction('checkIn', this.get('activity'));
    }
  }
});
