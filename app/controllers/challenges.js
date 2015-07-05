import Ember from 'ember';
import { createSortableArray } from '../models/sortable-array';

export default Ember.Controller.extend({

  sortedChallenges: Ember.computed('model', function() {
    return createSortableArray(this.get('model'), ['createdAt'], false);
  }),

  actions: {
    checkIn : function(challenge){
      var user = this.get('session.user');
      user.get('achieved').then(function(challenges) {
        if(challenges.indexOf(challenge) > -1) {
          challenges.removeObject(challenge);
        } else {
          challenges.pushObject(challenge);
        }
        user.save();
      });
    },
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
