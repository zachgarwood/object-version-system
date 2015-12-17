import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateComparison(version_id) {
      let versions = this.get('versionsToCompare');
      if (versions.contains(version_id)) {
        versions.removeObject(version_id);
      } else {
        versions.addObject(version_id);
      }
      this.set('versionsToCompare', versions);
      versions = versions.join(',');
      this.send('compare', versions);
    },
  },
  versionsToCompare: [],
});
