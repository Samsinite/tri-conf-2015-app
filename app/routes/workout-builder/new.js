import Ember from 'ember';
import ReversableRoute from '../../mixins/reversable-route';

export default Ember.Route.extend(ReversableRoute, {
  model: function() {
    var workout = this.store.createRecord('workout');

    var firstSet = this.store.createRecord('workout-set', {
      workout: workout
    });

    this.store.createRecord('exercise', {
      workoutSet: firstSet
    });


    return workout;
  }
});
