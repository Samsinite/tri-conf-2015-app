import DS from 'ember-data';
import removeUserRelation from './remove-user-relation'

export default DS.Model.extend(removeUserRelation, {
  name: DS.attr('string'),
  type: DS.attr('string'),
  location: DS.attr('string'),
  hours: DS.attr('string'),
  discount: DS.attr('string'),
  createdAt: DS.attr('date', { defaultValue: function() { return new Date(); } }),
});
