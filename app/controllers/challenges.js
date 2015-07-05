import Ember from 'ember';
import { createSortableArray } from '../models/sortable-array';

export default Ember.Controller.extend({

  sortedChallenges: Ember.computed('model', function() {
    return createSortableArray(this.get('model'), ['createdAt'], false);
  }),

  actions: {
    cancelChange: function(challenge){
      challenge.rollback();
    },
    removeChallenge: function(challenge){
      if (window.confirm(`Are you sure you want to delete challenge "${challenge.get('name')}?" This action cannot be undone.`)) {
        challenge.destroyRecord();
      }
    },
    createChallenge: function() {
      this.editingChallenge = this.store.createRecord('challenge');
    },
    saveChallenge: function(challenge) {
      challenge.save();
    },
  }
});
