import Ember from 'ember';

var _uuid = 0;

function generateUUID() {
  return _uuid++;
}

export default Ember.Component.extend({
  classNames: ['form-group', 'bootstrap-input-component'],
  isEditing: false,
  type: "input",
  cols: 40,
  rows: 3,

  isInput: function() {
    return this.type === "input";
  }.property('type'),

  isTextArea: function () {
    return this.type === "textarea";
  }.property('type'),

  inputId: Ember.computed(function() {
    return `bootstrap-input-${generateUUID()}`;
  })
});
