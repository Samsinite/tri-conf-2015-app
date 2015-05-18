import Ember from 'ember';

function read(object) {
  if (object && object.isStream) {
    return object.value();
  } else {
    return object;
  }
}

export function timeEqual(t1, t2) {
  if (t1 && t2) {
    return t1.toString() === t2.toString();;
  }
}

export default function(params) {
  return timeEqual(read(params[0]), read(params[1]));
}
