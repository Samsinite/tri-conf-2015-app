import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["workout-builder-form-component"],
  workout: null,

  actions: {
    save: function(model) {
      this.sendAction('on-save', model);
    },

    cancel: function() {
      this.sendAction('on-cancel');
    },

    addExercise: function(set) {
      var store = set.get('store');

      store.createRecord('exercise', {
        workoutSet: set
      });
    },

    removeExercise: function(exercise) {
      exercise.set('flaggedForDeletion', true);
    },

    addSet: function(workout) {
      var store = workout.get('store');

      var set = store.createRecord('workout-set', {
        workout: workout
      });

      store.createRecord('exercise', {
        workoutSet: set
      });
    },

    removeSet: function(set) {
      set.set('flaggedForDeletion', true);
    }
  }
});
