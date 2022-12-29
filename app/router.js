import EmberRouter from '@ember/routing/router';
import config from 'qonto-scratch-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('welcome', { path: '/' });
  this.route('lists', function () {
    this.route('new');
  });
});
