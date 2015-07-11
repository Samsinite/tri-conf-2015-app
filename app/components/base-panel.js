import Ember from 'ember';

export default Ember.Component.extend({
  title: "",
  bookmark: null,
  hasBookmark: function() {
    return !!this.get('bookmark');
  }.property('bookmark'),
  bookmarked: function() {
    return this.get('bookmark') === "selected";
  }.property('bookmark'),

  actions: {
    bookmark: function() {
      this.sendAction('onBookmark', this.get('item'));
    },
  }
});
