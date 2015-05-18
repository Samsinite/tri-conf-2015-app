import moment from 'moment';

function read(object) {
  if (object && object.isStream) {
    return object.value();
  } else {
    return object;
  }
}

export function startOfDay(day) {
  if (day) {
    var momentDay = moment(day);

    return moment([momentDay.year(), momentDay.month(), momentDay.date()]);
  }
}

export default function(params) {
  return startOfDay(read(params[0]));
}
