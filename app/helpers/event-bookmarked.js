import Ember from 'ember';

export default Ember.Helper.extend({
  isBookmarked: 'unselected',
  user: null,

  compute([user, event]) {
    if(user) {
      var bookmarkEventsPromise = user.get('bookmarkEvents');

      this.set('user', user);

      if (bookmarkEventsPromise) {
        bookmarkEventsPromise.then((bookmarkEvents) => {
          var isBookmarked = bookmarkEvents.find((bookmarkEvent) => {
            return bookmarkEvent.get('id') === event.get('id');
          });

          if (isBookmarked) {
            this.set('isBookmarked', "selected");
          } else {
            this.set('isBookmarked', "unselected");
          }
        });
      }
    }

    return this.get('isBookmarked');
  },

  recomputeBookmarked: Ember.observer('isBookmarked', 'user.bookmarkEvents', function() {
    this.recompute();
  })
});
