import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  starCount: 0,
  totalNumberOfStars: 3,

  starCountMinusOne: Ember.computed('starCount', function() {
    return this.get('starCount') - 1;
  })
});
