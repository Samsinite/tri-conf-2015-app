import Ember from 'ember';
import moment from 'moment';

const { set } = Ember;

export default Ember.Route.extend({
  queryParams: {
    day: {
      refreshModel: false
    }
  },
  model: function() {
    return this.store.createRecord('workout-event');
  },

  afterModel: function(workoutEvent, transition) {
    this.set('workouts', this.store.find('workout'));
  },

  setupController: function(controller, model) {
    var day = controller.get('day');
    this._super(controller, model);

    if (day) {
      var momentDay = moment(day);
      var date = momentDay.format('MM-DD-YYYY');
      var hour = momentDay.format('hh')
      var minute = momentDay.format('mm');
      var timeOfDay = momentDay.format('A');

      set(model, 'datetime', moment(day).toString())
      controller.set('date', date);
      controller.set('hour', hour);
      controller.set('minute', minute);
      controller.set('timeOfDay', timeOfDay);
    }
    else {
      set(model, 'datetime', moment().toString())
    }

    controller.set('workouts', this.get('workouts'));
  }
});
