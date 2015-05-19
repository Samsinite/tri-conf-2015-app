import Ember from 'ember';
import startOfDayHelper from '../helpers/start-of-day';
import endOfDayHelper from '../helpers/end-of-day';
import timeEqualHelper from '../helpers/time-equal';
import isTodayHelper from '../helpers/is-today';

export function initialize(/* container, application */) {
  Ember.HTMLBars._registerHelper('start-of-day', startOfDayHelper);
  Ember.HTMLBars._registerHelper('end-of-day', endOfDayHelper);
  Ember.HTMLBars._registerHelper('time-equal', timeEqualHelper);
  Ember.HTMLBars._registerHelper('is-today', isTodayHelper);
}

export default {
  name: 'register-sub-expressions',
  initialize: initialize
};
