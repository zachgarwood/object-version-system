import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('documents', {path: '/'}, function() {
    this.route('comparison');
  });
});

export default Router;
