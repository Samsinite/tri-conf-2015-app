import Ember from 'ember';

export function padNumber(number, size) {
  var str  = number + "";

  while (str.length < size) {
    str = "0" + str;
  }

  return str;
}

export default Ember.HTMLBars.makeBoundHelper(function(params) {
  padNumber(params[0], params[1]);
});
