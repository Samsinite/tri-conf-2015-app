import Ember from 'ember';
import ReversableRouteMixin from '../../../mixins/reversable-route';
import { module, test } from 'qunit';

module('ReversableRouteMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var ReversableRouteObject = Ember.Object.extend(ReversableRouteMixin);
  var subject = ReversableRouteObject.create();
  assert.ok(subject);
});
