import Ember from 'ember';

var _uuid = 0;

function generateUUID() {
  return _uuid++;
}

export default Ember.Component.extend({
  classNames: ['form-group', 'bootstrap-input-component'],

  inputId: Ember.computed(function() {
    return `bootstrap-input-${generateUUID()}`;
  })
});
