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

export default Ember.Helper.helper(function([day]) {
  return startOfDay(read(day));
});
