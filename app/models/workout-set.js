import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  workout: DS.belongsTo('workout'),
  exercises: DS.hasMany('exercise'),

  description: DS.attr('string'),

  flaggedForDeletion: false,

  availableExercises: Ember.computed('exercises.@each.flaggedForDeletion', function() {
    return this.get('exercises').filterBy('flaggedForDeletion', false);
  })
});
