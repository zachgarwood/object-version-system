import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    compare(versions) {
      this.transitionTo(
        'documents.comparison',
        {queryParams: {version_ids: versions}}
      );
    }
  },
  model() {
    return this.store.findAll('document');
  },
  renderTemplate() {
    this.render('documents',
    {
      into: 'application',
      outlet: 'documents',
    });
  } 
});
