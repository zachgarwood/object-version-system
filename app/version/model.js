import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  timestamp: DS.attr('date'),
  properties: DS.attr(),
  attributes: Ember.computed('properties', function() {
    let properties = this.get('properties');
    let attributes = Ember.A();
    for (var key in properties) {
        attributes.addObject({key: key, value: properties[key]});
    }
    return attributes;
  })
});
