import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  /*
   * For events we want to modify the query function to provide start/end filter
   * that check local storage for events that occur during
   * the start/end times.
   */
  query: function(records, query) {
    if (query.start && query.end) {
      var results = [];
      var start = query.start;
      var end = query.end;
      var id;
      var record;

      for (id in records) {
        record = records[id];

        // Check if datetime of event is inside start -- end time
        if (record.datetime >= start && record.datetime <= end) {
          results.push(record); // push record onto end of result array
        }
      }

      return results;
    } else {
      return this._super(records, query);
    }
  }
});
