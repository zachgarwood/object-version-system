import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('version', params.id);
  },
  renderTemplate() {
    this.render('list.versions',
    {
      into: 'application',
      outlet: 'detail',
    });
  }
});
