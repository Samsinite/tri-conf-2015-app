import Ember from 'ember';

export function discountCheck(params/*, hash*/) {
  var discount = params[0];
  var isAdmin = params[1];
  var isEditing = params[2];
  return discount || (isAdmin && isEditing);
}

export default Ember.HTMLBars.makeBoundHelper(discountCheck);
