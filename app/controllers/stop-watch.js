import Ember from 'ember';
import moment from 'moment';

const { setProperties } = Ember;

export default Ember.Controller.extend({
  isRunning: false,
  startDisabled: Ember.computed.alias('isRunning'),
  stopDisabled: Ember.computed.not('startDisabled'),
  cachedDuration: null,
  durationStart: null,
  hours: 0,
  minutes: 0,
  seconds: 0,
  milliseconds: 0,

  resetDuration: function() {
    var now = moment();
    var isRunning = this.get('isRunning');

    this.set('cachedDuration', null);

    if (isRunning) {
      this.set('durationStart', now);
    }

    setProperties(this, {
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    });
  },

  startTick: function() {
    var now = moment();

    this.set('durationStart', now);
    this.set('interval', setInterval(() => {
      Ember.run(this, 'computeTick');
    }, 10));
  },

  stopTick: function() {
    var now = moment();
    var interval = this.get('interval');
    var newCachedDuration = this.computeDuration(now);

    clearInterval(interval);
    this.updateTime(newCachedDuration);
    this.set('durationStart', null);
    this.set('cachedDuration', newCachedDuration);
  },

  computeTick: function() {
    var now = moment();
    var currentDuration = this.computeDuration(now);

    this.updateTime(currentDuration);
  },

  computeDuration: function(lastTime) {
    var cachedDuration = this.get('cachedDuration');
    var durationStart  = this.get('durationStart');
    var newDuration = moment.duration(lastTime.diff(durationStart));

    if (cachedDuration) {
      newDuration.add(cachedDuration);
    }

    return newDuration;
  },

  updateTime: function(duration) {
    setProperties(this, {
      hours: Math.floor(duration.asHours()),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
      milliseconds: duration.milliseconds()
    });
  },

  actions: {
    start: function() {
      this.set('isRunning', true);
      this.startTick();
    },

    stop: function() {
      this.set('isRunning', false);
      this.stopTick();
    },

    reset: function() {
      this.resetDuration();
    }
  }
});
