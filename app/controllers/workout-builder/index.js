import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    show: function(workout) {
      this.transitionToRoute('workout-builder.edit', workout);
    },

    destroyWorkout: function(workout) {
      if (window.confirm(`Are you sure you want to delete ${workout.get('name')}? This action cannot be undone.`)) {
        workout.destroyRecord();
      }
    }
  }
});
