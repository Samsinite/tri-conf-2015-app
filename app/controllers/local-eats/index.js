import Ember from 'ember';
import { createSortableArray } from '../../models/sortable-array';

export default Ember.Controller.extend({

  sortedRestaurants: Ember.computed('model', function() {
    return createSortableArray(this.get('model'), ['createdAt'], false);
  }),

  actions: {
    cancelChange: function(Restaurant){
      Restaurant.rollback();
    },
    removeRestaurant: function(Restaurant){
      Restaurant.destroyRecord();
    },
    createRestaurant: function() {
      this.editingRestaurant = this.store.createRecord('Restaurant');
    },
    saveRestaurant: function(restaurant) {
      restaurant.save();
    },
  }
});
