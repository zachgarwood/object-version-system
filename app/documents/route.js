import Ember from 'ember';

export default Ember.Route.extend({
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
