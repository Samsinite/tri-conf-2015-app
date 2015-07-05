import Ember from 'ember';
import inject from 'ember-cli-injection/inject';

var injectSession = inject('session');

export default Ember.Component.extend({
  session: injectSession('main'),
  restaurant: null,
  isEditing: false,
  ateAt: false,
  isNew: function() {
    this.set('isEditing', this.get('restaurant.isNew'));
  }.observes('restaurant').on('init'),
  hasDiscount: function() {
    return this.restaurant.get('discount') || (this.get('isEditing') && this.get('session.user.isAdmin'));
  }.property('restaurant.discount', 'isEditing', 'session.user.isAdmin'),
  ateUpdate: function() {
    if(this.get('session.isAuthenticated')) {
      var didEat = false;
      var that = this;
      this.get('session.user.ateAt').then(function(ateAt){
        ateAt.forEach(function(restaurant){
          if(restaurant === that.get('restaurant')) {
            didEat = true;
          }
        });
        that.set('ateAt', didEat);
      });
    }
  }.observes('restaurant', 'session.user.ateAt').on('init'),

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
    },
    checkIn: function() {
      this.sendAction('checkIn', this.get('restaurant'));
    },

  }

});
