import Ember from 'ember';

function read(object) {
  if (object && object.isStream) {
    return object.value();
  } else {
    return object;
  }
}

export function getPropHelper(objStream, propStream) {
  var obj = read(objStream);
  var prop = read(propStream);
  return obj[prop];
}

export default Ember.Helper.helper(function([objStream, propStream]) {
  return getPropHelper(objStream, propStream);
});
