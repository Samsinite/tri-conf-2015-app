import Ember from 'ember';

export default Ember.Mixin.create({
  deleteRecord: function() {
    var id = this.get('id');
    this.store.find('User').then((users) => {
      users.forEach((user) => {
        user.eachRelationship((name, relation) => {
          user.get(name).forEach((related) => {
            if (related.get('id') === id ) {
              user.get(name).removeObject(related);
            }
          });
        });
        user.save()
      });
    });
    return this._super();
  },
});
