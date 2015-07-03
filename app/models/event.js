import DS from 'ember-data';

export default DS.Model.extend({
  track: DS.belongsTo('track', {async: true}),
  title: DS.attr('string'),
  speaker: DS.attr('string'),
  createdAt: DS.attr('date', { defaultValue: function() { return new Date(); } }),
  location: DS.belongsTo('location', {async: true}),
  attendees: DS.hasMany('user', {async: true}),
  date: DS.attr('date'),
  // day: function(key, value, previousValue) {
  //   if(arguments.length > 1) {
  //     var dates = {Monday: 13,
  //           Tuesday: 14,
  //           Wednesday: 15,
  //           Thursday: 16,
  //           Friday: 17,
  //           Saturday: 18,
  //           Sunday: 19};
  //     this.get('date').setDate(dates[value]);
  //   }
  //   var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  //   return names[this.get('date').getDay()];
  // }.property('date'),
  // hour: function(key, value, previousvalue) {
  //   if (arguments.length > 1) {
  //     if (this.get('ampm').toLowerCase() === "pm") {
  //       value += 12;
  //     };
  //     this.get('date').setHours(value);
  //   }
  //   var hour = this.get('date').getHours();
  //   if (hour > 12) {
  //     hour -= 12;
  //   }
  //   return hour;
  // }.property('date'),
  // minute: function(key, value, previousvalue) {
  //   if (arguments.length > 1) {
  //     this.get('date').setMinutes(value);
  //   }
  //   return this.get('date').getMinutes(value);
  // }.property('date'),
  // ampm: function (key, value, previousvalue) {
  //   if (arguments.length > 1) {
  //     if (previousvalue === "am" && value === "pm") {
  //       this.get('date').setHours(this.get('date') + 12);
  //     } else if (previousvalue === "pm" && value == "am") {
  //       this.get('date').setHours(this.get('date') - 12);
  //     }
  //   }
  //   if (this.get('date') > 12) {
  //     return "am";
  //   } else {
  //     return "pm";
  //   }
  // }.property('date'),
  // time: function() {
  //   return this.get('hour')+":"+this.get('minute')+" "+this.get('ampm');
  // }.property('date'),
  // time: ds.attr('string', {defaultvalue: function(){return "00:00 am"}}),
  // function() {
  //   var day = this.get('day');
  //   if(! day){
  //     day = "monday";
  //   }
  //   var date = dates[day.trim().tolowercase()];
  //   if(! date) {
  //     date = 13;
  //   }
  //   var time = this.get('time');
  //   if(! time) {
  //     time = "00:00 am";
  //   }
  //   time = time.split(/[: ]/);
  //   if( time.length !== 3) {
  //     time = ["00", "00", "am"];
  //   }
  //   time[0] = parseint(time[0]);
  //   time[1] = parseint(time[1]);
  //   if(time[2].tolowercase() === "pm") {
  //     time[0] += 12;
  //   }
  //   return new date(2015, 6, date, time[0], time[1]);
  // }.property('day', 'time')

});
