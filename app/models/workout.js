import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  event: DS.belongsTo('event'),
  workoutSets: DS.hasMany('workout-set'),

  name: DS.attr('string'),

  availableSets: Ember.computed('workoutSets.@each.flaggedForDeletion', function() {
    return this.get('workoutSets').filterBy('flaggedForDeletion', false);
  }),

  rollback: function() {
    var sets = this.get('workoutSets') || [];

    sets.forEach(function(set) {
      var exercises = set.get('exercises') || [];

      exercises.forEach(function(exercise) {
        if (exercise.get('flaggedForDeletion')) {
          exercise.set('flaggedForDeletion', false);
        }
        exercise.rollback();
      });

      if (set.get('flaggedForDeletion')) {
        set.set('flaggedForDeletion', false);
      }
      set.rollback();
    });

    this._super();
  },

  save: function() {
    var sets = this.get('workoutSets') || [];

    sets.forEach(function(set) {
      var exercises = set.get('exercises') || [];
      var shouldDeleteSet = set.get('flaggedForDeletion');

      exercises.forEach(function(exercise) {
        if (shouldDeleteSet) {
          exercise.deleteRecord();
        } else {
          var shouldDeleteExercise = exercise.get('flaggedForDeletion');

          if (shouldDeleteExercise) {
            exercise.deleteRecord();
          }
        }
      });

      if (shouldDeleteSet) {
        set.deleteRecord();
      }
    });

    this._super();
  }
});
