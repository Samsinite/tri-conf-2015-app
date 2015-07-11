import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  createdAt: DS.attr('date', { defaultValue: function() { return new Date(); } }),
  category: DS.attr('string'),
});
