import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,
});

export default Router.map(function() {
  this.route('events', { path: '/' });
  this.route('my-events');
  this.route('challenges');

  this.route('restaurants');

  this.route('leaderboard');

  this.route('achievements');
});
