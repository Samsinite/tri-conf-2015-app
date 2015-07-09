import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '', // remove default wrapping div element
  times: 0,

  loopArray: Ember.computed('times', function() {
    var times = this.get('times');
    var array = [];

    if (times) {
      for (let i = 0; i < times; i++) {
        array.push(i);
      }
    }

    return array;
  })
});
