import Ember from 'ember';
import ReversableRoute from '../../mixins/reversable-route';

export default Ember.Route.extend(ReversableRoute, {
  model: function(params) {
    return this.store.find('workout', params.workout_id);
  }
});
