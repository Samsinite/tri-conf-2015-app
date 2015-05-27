import DS from 'ember-data';

export default DS.Model.extend({
  workout: DS.belongsTo('workout'),

  title: DS.attr('string'),
  datetime: DS.attr('string')
});
