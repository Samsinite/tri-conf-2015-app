import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  venue: DS.attr('string'),
});
