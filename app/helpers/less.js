import Ember from 'ember';

function read(object) {
  if (object && object.isStream) {
    return object.value();
  } else {
    return object;
  }
}

export function lessHelper(leftValue, rightValue) {
  return read(leftValue) < read(rightValue);
}

export default Ember.Helper.helper(function([leftvalue, rightValue]) {
  return lessHelper(leftValue, rightValue);
});
