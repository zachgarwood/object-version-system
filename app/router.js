import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('list', {path: '/'}, function() {
    this.route('versions', {path: 'versions/:id'});
  });
});

export default Router;
