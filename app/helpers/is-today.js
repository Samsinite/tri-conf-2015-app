import moment from 'moment';
import { startOfDay } from './start-of-day';
import { timeEqual } from './time-equal';

function read(object) {
  if (object && object.isStream) {
    return object.value();
  } else {
    return object;
  }
}

export function isToday(day) {
  if (day) {
    var startOfToday = startOfDay(moment());
    var startDay = startOfDay(day);

    return timeEqual(startOfToday, startDay);
  }
}

export default Ember.Helper.helper(function([today]) {
  return isToday(read(today));
});

