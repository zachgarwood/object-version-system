import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleCollapseVersions() {
      this.toggleProperty('collapseVersions');
    }
  }
});
