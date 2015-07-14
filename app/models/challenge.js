import DS from 'ember-data';
import removeUserRelation from './remove-user-relation'

export default DS.Model.extend(removeUserRelation, {
  name: DS.attr('string'),
  description: DS.attr('string'),
  createdAt: DS.attr('date', { defaultValue: function() { return new Date(); } }),
  category: DS.attr('string'),
  completedQuote: DS.attr('string')
});
