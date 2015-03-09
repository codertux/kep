import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  //match('/').to('index');
  this.route('application');
  this.route('protected');
  this.route('login');
  this.route('candy');
});


export default Router;
