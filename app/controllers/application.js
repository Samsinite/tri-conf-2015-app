import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    openModal: function(modalName) {
      console.log("opening modal");
      return this.render(modalName, {
        into: 'application',
        outlet: 'modal'
      });
    }
  }
});
