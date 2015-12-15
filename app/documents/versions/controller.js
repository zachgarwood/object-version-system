import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
    this._super();
    this.selectedAttribute = null;
  },
  visibleAttributes: Ember.computed('model', 'selectedAttribute', function() {
    let key = this.get('selectedAttribute');
    let visibleAttributes = this.get('model.attributes');
    if (key !== null) {
      visibleAttributes = visibleAttributes.filterBy('key', key);
    }
    return visibleAttributes;
  }),
  actions: {
    selectAttribute(attribute_key) {
      if (this.get('selectedAttribute') == attribute_key) {
        attribute_key = null;
      }
      this.set('selectedAttribute', attribute_key);
    }
  }
});
