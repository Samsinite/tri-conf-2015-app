import Ember from 'ember';

var _uuid = 0;

function generateUUID() {
  return _uuid++;
}

export default Ember.Component.extend({
  classNames: ['form-group', 'bootstrap-input-component'],
  isEditing: false,

  isInput: function() {
    return this.type === "input";
  }.property('type'),

  inputId: Ember.computed(function() {
    return `bootstrap-input-${generateUUID()}`;
  })
});
