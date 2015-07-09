// app/serializers/application.js
import FirebaseSerializer from 'emberfire/serializers/firebase';

export default FirebaseSerializer.extend({
  serializeAttribute(snapshot, json, key, attribute) {
    if(attribute.options.readOnly !== true) {
      this._super(snapshot, json, key, attribute);
    }
  }
});
