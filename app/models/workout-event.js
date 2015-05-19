import DS from 'ember-data';

export default DS.Model.extend({
  workout: DS.belongsTo('workout'),

  datetime: DS.attr('date')
});
