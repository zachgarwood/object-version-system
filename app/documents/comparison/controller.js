import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['version_ids'],
  actions: {
    selectProperty(property_id) {
      if (this.get('selectedProperty') === property_id) {
        this.set('selectedProperty', null);
      } else {
        this.set('selectedProperty', property_id);
      }
    }
  },
  selectedProperty: null,
  selectedVersions: Ember.computed('model', 'versions', function() {
    let versionIds = [];
    if (this.get('version_ids') !== undefined) {
      versionIds = this.get('version_ids').split(',');
    }
    return this.get('model').filter(function(version) {
      return versionIds.contains(version.id);
    }).sortBy('timestamp'); 
  }),
  comparisons: Ember.computed('selectedVersions', 'propertiesToCompare', function() {
    let versions = this.get('selectedVersions');
    let properties = this.get('propertiesToCompare');
    let comparisons = Ember.A();
    properties.forEach(function(key) {
      let diffs = Ember.A();
      let previousValue = null;
      versions.forEach(function(version, index) {
        let currentValue = version.get('properties')[key];
        let diff = {
          value: currentValue,
          isChanged: index > 0 && currentValue !== previousValue,
        };
        diffs.pushObject(diff);
        previousValue = currentValue;
      });
      comparisons.pushObject({key: key, diffs: diffs});
    });
    return comparisons;
  }),
  propertiesToCompare: Ember.computed('selectedVersions', 'selectedProperty', function() {
    if (this.get('selectedProperty')) {
      return Ember.A([this.get('selectedProperty')]);
    } else {
      let versions = this.get('selectedVersions');
      let uniqueKeys = Ember.A();
      versions.forEach(function(version) {
        uniqueKeys.addObjects(Object.keys(version.get('properties')));
      });
      return uniqueKeys.sort();
    }
  }),
});
