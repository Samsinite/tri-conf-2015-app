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
    var momentDay = moment(day);
    var oneDay = moment.duration(1, 'd');
    return moment([momentDay.year(), momentDay.month(), momentDay.date()]).add(oneDay);
  }
}

export default Ember.Helper.helper(function([day]) {
  return endOfDay(read(day));
})
