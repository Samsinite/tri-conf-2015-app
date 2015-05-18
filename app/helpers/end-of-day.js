import Ember from 'ember';
import moment from 'moment';

function read(object) {
  if (object && object.isStream) {
    return object.value();
  } else {
    return object;
  }
}

export function endOfDay(day) {
  if (day) {
    var day = moment(day);
    var oneDay = moment.duration(1, 'd');
    return moment([day.year(), day.month(), day.date()]).add(oneDay);
  }
}

export default function(params, hash, options, env) {
  return endOfDay(read(params[0]));
}
