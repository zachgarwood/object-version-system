import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleCollapseVersions() {
      this.toggleProperty('collapseVersions');
    },
    toggleVersionActive(version_id) {
      this.get('updateComparison')(version_id);
    },
  }
});
