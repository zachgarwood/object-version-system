import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('version');
  },
  renderTemplate() {
    this.render('documents.comparison',
    {
      into: 'application',
      outlet: 'comparison',
    });
  }
});
