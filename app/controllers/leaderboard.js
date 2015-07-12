import Ember from 'ember';

export default Ember.Controller.extend({
  eventsLeaderboard: Ember.computed('model', function() {
    return createSortableArray(this.get('model'), ['date'], true);
  }),
});
