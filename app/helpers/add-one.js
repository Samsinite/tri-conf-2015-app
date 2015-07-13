import Ember from 'ember';

export function addOne([i]) {
  return i+1;
}

export default Ember.HTMLBars.makeBoundHelper(addOne);
