import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' }, function() {
    this.route('signup');
    this.route('signin');
  });
  this.route('dashboard', function() {
    this.route('profile');
    this.route('mentoring', function() {
      this.route('new');
      this.route('asked', function() {
        this.route('show');
      });
      this.route('given', function() {
        this.route('show');
      });
      this.route('scheduled', function() {
        this.route('show');
      });
    });
  });
});

export default Router;
