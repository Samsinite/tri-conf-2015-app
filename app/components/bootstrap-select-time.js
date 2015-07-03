import Ember from 'ember';
export default Ember.Component.extend({
  classNames: ['form-group', 'bootstrap-select-time-component'],
  mindate: new Date(2015, 06, 14),
  maxdate: new Date(2015, 06, 20),
});
