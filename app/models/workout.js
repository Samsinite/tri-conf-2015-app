import Ember from 'ember';
import DS from 'ember-data';

const { get, set } = Ember;

export default DS.Model.extend({
  workoutEvents: DS.belongsTo('workout-event'),
  workoutSets: DS.hasMany('workout-set'),

  name: DS.attr('string'),

  availableSets: Ember.computed('workoutSets.@each.flaggedForDeletion', function() {
    return this.get('workoutSets').filterBy('flaggedForDeletion', false);
  }),

  rollback: function() {
    var workoutSets = get(this, 'workoutSets') || [];

    workoutSets.forEach(function(workoutSet) {
      var exercises = get(workoutSet, 'exercises') || [];

      exercises.forEach(function(exercise) {
        if (get(exercise, 'flaggedForDeletion')) {
          exercise.workoutSet('flaggedForDeletion', false);
        }
        exercise.rollback();
      });

      if (get(workoutSet, 'flaggedForDeletion')) {
        set(workoutSet, 'flaggedForDeletion', false);
      }
      workoutSet.rollback();
    });

    this._super();
  },

  save: function() {
    var workoutSets = get(this, 'workoutSets') || [];

    workoutSets.forEach(function(workoutSet) {
      var exercises = get(workoutSet, 'exercises') || [];
      var shouldDeleteSet = get(workoutSet, 'flaggedForDeletion');

      exercises.forEach(function(exercise) {
        if (shouldDeleteSet) {
          exercise.deleteRecord();
        } else {
          var shouldDeleteExercise = get(exercise, 'flaggedForDeletion');

          if (shouldDeleteExercise) {
            exercise.deleteRecord();
          }
        }
      });

      if (shouldDeleteSet) {
        workoutSet.deleteRecord();
      }
    });

    this._super();
  }
});
