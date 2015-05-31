import DS from 'ember-data';

export default DS.Model.extend({
	track: DS.belongsTo('track'),
	title: DS.attr('string'),
	speaker: DS.attr('string'),
	day: DS.attr('string'),
	time: DS.attr('string'),
	location: DS.belongsTo('location')
});
