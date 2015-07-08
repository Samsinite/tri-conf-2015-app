import Ember from 'ember';
import inject from 'ember-cli-injection/inject';

var injectSession = inject('session');

export default Ember.Component.extend({
  session: injectSession('main'),
  item: null,
  title: "",
  isEditing: false,

  onLogout: function() {
    this.set('isEditing', false);
  }.observes('session.user'),

  isNew: function() {
    this.set('isEditing', this.get('item.isNew'));
  }.observes('item').on('init'),

  actions: {
    edit: function(){
      this.set('isEditing', true);
      this.sendAction('onEdit', this.get('item'));
    },
    remove: function(){
      this.sendAction('onRemove', this.get('item'));
    },
    save: function() {
      this.set('isEditing', false);
      this.sendAction('onSave', this.get('item'));
    },
    cancel: function() {
      this.set('isEditing', false);
      this.sendAction('onCancel', this.get('item'));
    },
  }
});
