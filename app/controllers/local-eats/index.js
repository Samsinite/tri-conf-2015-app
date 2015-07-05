import Ember from 'ember';
import { createSortableArray } from '../../models/sortable-array';

export default Ember.Controller.extend({

  sortedRestaurants: Ember.computed('model', function() {
    return createSortableArray(this.get('model'), ['createdAt'], false);
  }),

  actions: {
    cancelChange: function(restaurant){
      restaurant.rollback();
    },
    removeRestaurant: function(restaurant){
      if (window.confirm(`Are you sure you want to delete restaurant ${restaurant.get('title')}? This action cannot be undone.`)) {
        restaurant.destroyRecord();
      }
    },
    createRestaurant: function() {
      this.editingRestaurant = this.store.createRecord('restaurant');
    },
    saveRestaurant: function(restaurant) {
      restaurant.save();
    },
    checkIn: function(restaurant) {
      var user = this.get('session.user');
      user.get('ateAt').then(function(restaurants) {
        if(restaurants.indexOf(restaurant) > -1) {
          restaurants.removeObject(restaurant);
        } else {
          restaurants.pushObject(restaurant);
        }
        user.save();
      });
    },
  }
});
