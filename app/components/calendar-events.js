import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['calendar-events-component'],
  title: "May 17th",
  events: [
    {
      title: "Putton Pushing, Brain Crunching, Keyboard Masing",
      time: "12pm",
      details: "Fuse Co-Working Space"
    },
    {
      title: "Putton Pushing, Brain Crunching, Keyboard Masing",
      time: "12pm",
      details: "Fuse Co-Working Space"
    },
    {
      title: "Putton Pushing, Brain Crunching, Keyboard Masing",
      time: "12pm",
      details: "Fuse Co-Working Space"
    }
  ]
});
