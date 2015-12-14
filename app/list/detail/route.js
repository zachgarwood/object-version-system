import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('document', params.id);
  },
  renderTemplate() {
    this.render('list.detail',
    {
      into: 'application',
      outlet: 'detail',
    });
  }
});
