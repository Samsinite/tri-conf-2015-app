import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function(model) {
      model.save();

      this.transitionToRoute('workout-builder.index');
    },

    cancel: function() {
      this.transitionToRoute('workout-builder.index');
    }
  }
});
