import DS from 'ember-data';

export default DS.Model.extend({
  version: DS.belongsTo('version')
});
