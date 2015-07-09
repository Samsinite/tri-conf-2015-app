import Ember from 'ember';

function read(object) {
  if (object && object.isStream) {
    return object.value();
  } else {
    return object;
  }
}

export function lessOrEqualHelper(leftValue, rightValue) {
  return read(leftValue) <= read(rightValue);
}

export default Ember.Helper.helper(function([leftValue, rightValue]) {
  return lessOrEqualHelper(leftValue, rightValue);
});
