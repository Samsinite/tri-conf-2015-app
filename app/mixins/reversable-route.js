import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    willTransition: function(transition) {
      var model = this.controller.get('model');
      var isSaving = model.get('isSaving');

      if (!isSaving) {
        if (window.confirm('Unsaved changes will be lost, are you sure you want to continue?')) {
          model.rollback();
        } else {
          transition.abort();
        }
      }
    }
  }
});
