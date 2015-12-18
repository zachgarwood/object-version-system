import DS from 'ember-data';

export default DS.Model.extend({
  document: DS.belongsTo('document'),
  timestamp: DS.attr('date'),
  properties: DS.attr(),
});
