import Ember from 'ember';

export function hiddenFieldCheck(params/*, hash*/) {
  var field = params[0];
  var isAdmin = params[1];
  var isEditing = params[2];
  return field || (isAdmin && isEditing);
}

export default Ember.HTMLBars.makeBoundHelper(hiddenFieldCheck);
