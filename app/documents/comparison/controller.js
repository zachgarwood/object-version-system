import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['version_ids'],
  selectedVersions: Ember.computed('model', 'versions', function() {
    let versionIds = [];
    if (this.get('version_ids') !== undefined) {
      versionIds = this.get('version_ids').split(',');
    }
    return this.get('model').filter(function(version) {
      return versionIds.contains(version.id);
    }).sortBy('timestamp'); 
  }),
  comparisons: Ember.computed('selectedVersions', function() {
    let versions = this.get('selectedVersions');
    let uniqueKeys = Ember.A();
    versions.forEach(function(version) {
      uniqueKeys.addObjects(Object.keys(version.get('properties')));
    });
    uniqueKeys = uniqueKeys.sort();
      
    let comparisons = Ember.A();
    uniqueKeys.forEach(function(key) {
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
});
