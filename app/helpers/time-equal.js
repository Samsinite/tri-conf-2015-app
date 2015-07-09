function read(object) {
  if (object && object.isStream) {
    return object.value();
  } else {
    return object;
  }
}

export function timeEqual(t1, t2) {
  if (t1 && t2) {
    return t1.toString() === t2.toString();
  }
}

export default Ember.Helper.helper(function([t1, t2]) {
  return timeEqual(read(t1), read(t2));
});
