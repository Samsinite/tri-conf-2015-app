import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  attrs: {
    workout: { embedded: 'always' }
  }
});
