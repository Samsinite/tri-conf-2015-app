import DS from 'ember-data';

export default DS.Model.extend({
  workoutSet: DS.belongsTo('workout-set'),

  name: DS.attr('string'),
  details: DS.attr('string'),
  quantity: DS.attr('string'),

  flaggedForDeletion: false,
});
