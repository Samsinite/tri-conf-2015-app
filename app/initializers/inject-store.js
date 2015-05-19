export function initialize(container, application) {
  application.inject('component:calendar-events', 'store', 'store:main');
  application.inject('component:timespan-events', 'store', 'store:main');
}

export default {
  name: 'inject-store',
  after: 'ember-data',
  initialize: initialize
};
