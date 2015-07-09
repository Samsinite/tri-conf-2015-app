import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    closeModal: function() {
      this.sendAction('closeAction');
    },
    login: function(provider) {
      this.sendAction('loginAction', provider);
      this.sendAction('closeAction');
    }
  }
});
