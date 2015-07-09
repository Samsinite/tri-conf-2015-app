import Ember from 'ember';

const { setProperties, set } = Ember;

export default Ember.Controller.extend({
	isExpanded: false,
	showModal(modalDialogName, modalContext) {
		setProperties(this, {
			modalDialogName,
			modalContext,
			isModalVisible: true
		});
	},
	closeModal() {
		set(this, 'isModalVisible', false);
	},
	actions : {
    closeMenu: function() {
      this.set('isExpanded', false);
    },
    openMenu: function() {
      this.set('isExpanded', true);
    },
    menuLoad: function(route) {
      this.transitionToRoute(route);
      this.set('isExpanded', false);
    },
    login: function(provider) {
      return this.get("session").login(provider);
    },
    logout: function() {
      this.get('session').logout();
    },
		closeModal: function() {
	    this.set('isModalVisible', false);
	  }
  }
});
