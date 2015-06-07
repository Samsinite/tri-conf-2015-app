
import Ember from "ember";
import config from '../config/environment';
import Firebase from 'firebase';

export default {
  name: "Session",
  after: "ember-data",

  initialize: function(container, app) {
    var session = Ember.Object.extend({
      ref: new Firebase(config.firebase),
      provider: null,
      user: null,

      addFirebaseCallback: function() {
        var session = this;
        var store = container.lookup('store:main');

        this.get("ref").onAuth(function(authData) {
          if (authData) {
            session.set("isAuthenticated", true);
            session.set("provider", authData.provider);
            store.find('user', authData.auth.uid).then(function(user){
              var displayName = authData[authData.provider].displayName;
              user.set('displayName', displayName);
              session.set('user', user);
            }, function(){
              store.unloadRecord(store.recordForId('user', authData.auth.uid));
              var displayName = authData[authData.provider].displayName;
              var user = store.createRecord('user', {id: authData.auth.uid, points: 0, displayName: displayName});
              user.save();
              session.set('user', user);
            });
          } else {
            session.set("isAuthenticated", false);
            session.set("provider", null);
          }
        });
      }.on("init"),

      login: function(provider) {
        return new Ember.RSVP.Promise((resolve, reject) => {
          this.get("ref").authWithOAuthPopup(provider, function(error, user) {
            if (user) {
              resolve(user);
            } else {
              reject(error);
            }
          });
        });
      },

      logout: function() {
        this.get("ref").unauth();
      },

      auth: function() {
        return this.get("ref").getAuth();
      }.property("isAuthenticated")
    });
    app.register("session:main", session);
    app.inject("controller", "session", "session:main");
    app.inject("route", "session", "session:main");
  }
};
