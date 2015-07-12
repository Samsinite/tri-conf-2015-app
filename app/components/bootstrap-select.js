import Ember from 'ember';

var _uuid = 0;

function generateUUID() {
  return _uuid++;
}

function computedActionKey(dependentActionKey) {
  var camelCaseActionKey = dependentActionKey.camelize();

  return Ember.computed(dependentActionKey, function() {
    return this.get(dependentActionKey) ? camelCaseActionKey : null;
  });
}

export default Ember.Component.extend({
  classNames: ['form-group', 'bootstrap-select-component'],

  selectItem: computedActionKey('select-item'),

  inputId: Ember.computed(function() {
    return `bootstrap-select-${generateUUID()}`;
  }),

  actions: {
    selectItem: function() {
      this.sendAction('select-item', ...arguments);
    },
  }
});
