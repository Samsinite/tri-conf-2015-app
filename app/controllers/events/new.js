import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  queryParams: ['day'],
  day: moment(),
  hour: null,
  minute: null,
  timeOfDay: null,

  _setTime: function(date, hour, minute, timeOfDay) {
    if (date, hour, minute, timeOfDay) {
      this.set('model.datetime', moment(
          `${date} ${hour}:${minute} ${timeOfDay}`,
          'MM-DD-YYY hh:mm A'
      ).toString());
    }
  },

  //date: Ember.computed('model.datetime', {
  //  get() {
  //    var datetime = this.get('model.datetime');

  //    if (datetime) {
  //      return moment(datetime).format('MM-DD-YYYY');
  //    }
  //  },

  //  set(key, date) {
  //  }
  //}),

  //hour: Ember.computed('model.datetime', {
  //  get() {
  //    var datetime = this.get('model.datetime');

  //    if (datetime) {
  //      return moment(datetime).format('hh');
  //    }
  //  },

  //  set() { }
  //}),

  //minute: Ember.computed('model.datetime', {
  //  get() {
  //    var datetime = this.get('model.datetime');

  //    if (datetime) {
  //      return moment(datetime).format('mm');
  //    }
  //  },

  //  set() { }
  //}),

  //timeOfDay: Ember.computed('model.datetime', {
  //  get() {
  //    var datetime = this.get('model.datetime');

  //    if (datetime) {
  //      return moment(datetime).format('A');
  //    }
  //  },

  //  set() { }
  //}),

  actions: {
    save: function(model) {
      var date = this.get('date');
      var hour = this.get('hour');
      var minute = this.get('minute');
      var timeOfDay = this.get('timeOfDay');
      this._setTime(date, hour, minute, timeOfDay);

      model.save().then(() => {
        this.transitionToRoute('scheduler');
      });
    },

    updateHour: function(hour) {
      var date = this.get('date');
      var minute = this.get('minute');
      var timeOfDay = this.get('timeOfDay');
    },

    updateMinute: function(minute) {
      var date = this.get('date');
      var hour = this.get('hour');
      var timeOfDay = this.get('timeOfDay');
    },

    updateTimeOfDay: function(timeOfDay) {
      var date = this.get('date');
      var hour = this.get('hour');
      var minute = this.get('minute');
    },
  }
});
