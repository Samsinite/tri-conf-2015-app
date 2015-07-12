import Ember from 'ember';
import { createSortableArray } from '../models/sortable-array';

export default Ember.Controller.extend({
  applicationController: Ember.inject.controller("application"),
  sortedRestaurants: Ember.computed('model', function() {
    return createSortableArray(this.get('model'), ['createdAt'], false);
  }),

  actions: {
    checkIn: function(restaurant) {
      var user = this.get('session.user');
      if(!user) {
        var app = this.get('applicationController');
        app.showModal('login-modal');
      } else {
        user.get('ateAt').then(function(restaurants) {
          if(restaurants.indexOf(restaurant) > -1) {
            restaurants.removeObject(restaurant);
          } else {
            restaurants.pushObject(restaurant);
          }
          user.save();
          restaurants.save();
        });
      }
    },
    cancelChange: function(restaurant){
      restaurant.rollback();
    },
    removeRestaurant: function(restaurant){
      if (window.confirm(`Are you sure you want to delete restaurant "${restaurant.get('title')}"? This action cannot be undone.`)) {
        restaurant.destroyRecord();
      }
    },
    createRestaurant: function() {
      this.editingRestaurant = this.store.createRecord('restaurant');
    },
    saveRestaurant: function(restaurant) {
      restaurant.save();
    },
  }
});
