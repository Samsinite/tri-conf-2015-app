import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  event: DS.belongsTo('event'),
  movement: DS.belongsTo('movement')
});
