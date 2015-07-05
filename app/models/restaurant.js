import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  type: DS.attr('string'),
  location: DS.attr('string'),
  hours: DS.attr('string'),
  discount: DS.attr('string'),
  createdAt: DS.attr('date', { defaultValue: function() { return new Date(); } }),
});

