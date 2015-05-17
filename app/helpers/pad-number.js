import Ember from 'ember';

export function padNumber(params) {
  var str  = params[0] + "";
  var size = params[1];

  while (str.length < size) {
    str = "0" + str;
  }

  return str;
}

export default Ember.HTMLBars.makeBoundHelper(padNumber);
