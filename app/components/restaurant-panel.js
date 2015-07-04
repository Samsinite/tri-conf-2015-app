import Ember from 'ember';
import inject from 'ember-cli-injection/inject';

var injectSession = inject('session');

export default Ember.Component.extend({
  session: injectSession('main'),
  restaurant: null,
  isEditing: false,
  isNew: function() {
    console.log('isNew was called');
    this.set('isEditing', this.get('restaurant.isNew'));
  }.observes('restaurant').on('init'),

  actions: {
    editRestaurant: function(){
      this.set('isEditing', true);
      this.sendAction('onEdit', this.get('restaurant'));
    },
    removeRestaurant: function(){
      this.sendAction('onRemove', this.get('restaurant'));
    },
    saveRestaurant: function() {
      this.set('isEditing', false);
      this.sendAction('onSave', this.get('restaurant'));
    },
    cancelChange: function() {
      this.set('isEditing', false);
      this.sendAction('onCancel', this.get('restaurant'));
    }
  }

});
