import Ember from 'ember';
import { createSortableArray } from '../models/sortable-array';

export default Ember.Controller.extend({
  eventsLeaderboard: Ember.computed('model', function() {
    return createSortableArray(this.get('model'), ['numEvents'], false).slice(0,10);
  }).property('model.@each.numEvents'),

  restaurantLeaderboard: Ember.computed('model', function() {
    return createSortableArray(this.get('model'), ['numRestaurants'], false).slice(0,10);
  }).property('model.@each.numRestaurants'),

  bookmarkLeaderboard: Ember.computed('model', function() {
    return createSortableArray(this.get('model'), ['numBookmarks'], false).slice(0,10);
  }).property('model.@each.numBookmarks'),

  achievementLeaderboard: Ember.computed('model', function() {
    return createSortableArray(this.get('model'), ['numAchieved'], false).slice(0,10);
  }).property('model.@each.numAchieved'),

  totalScoreLeaderboard: Ember.computed('model', function() {
    return createSortableArray(this.get('model'), ['totalScore'], false).slice(0,10);
  }).property('model.@each.totalScore'),
});
