import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('document');
  },
  renderTemplate() {
    this.render('list',
    {
      into: 'application',
      outlet: 'list',
    });
  } 
});
