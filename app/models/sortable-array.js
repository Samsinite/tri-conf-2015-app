import Ember from 'ember';

var SortableArray = Ember.ArrayProxy.extend(Ember.SortableMixin);

export function createSortableArray(array, sortProperties, sortAscending) {
  return SortableArray.create({
    content: array,
    sortProperties: sortProperties,
    sortAscending: sortAscending
  });
}

export default SortableArray;
