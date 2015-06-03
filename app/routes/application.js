import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    openModal: function(modalName) {
      console.log("opening modal");
      return this.render(modalName, {
        into: 'application',
        outlet: 'modal'
      });
    },
    closeModal: function() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});
