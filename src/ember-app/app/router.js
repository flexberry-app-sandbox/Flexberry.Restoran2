import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-restoran2-бронь-l');
  this.route('i-i-s-restoran2-бронь-e',
  { path: 'i-i-s-restoran2-бронь-e/:id' });
  this.route('i-i-s-restoran2-бронь-e.new',
  { path: 'i-i-s-restoran2-бронь-e/new' });
  this.route('i-i-s-restoran2-гости-l');
  this.route('i-i-s-restoran2-гости-e',
  { path: 'i-i-s-restoran2-гости-e/:id' });
  this.route('i-i-s-restoran2-гости-e.new',
  { path: 'i-i-s-restoran2-гости-e/new' });
  this.route('i-i-s-restoran2-должность-l');
  this.route('i-i-s-restoran2-должность-e',
  { path: 'i-i-s-restoran2-должность-e/:id' });
  this.route('i-i-s-restoran2-должность-e.new',
  { path: 'i-i-s-restoran2-должность-e/new' });
  this.route('i-i-s-restoran2-ресторан-l');
  this.route('i-i-s-restoran2-ресторан-e',
  { path: 'i-i-s-restoran2-ресторан-e/:id' });
  this.route('i-i-s-restoran2-ресторан-e.new',
  { path: 'i-i-s-restoran2-ресторан-e/new' });
  this.route('i-i-s-restoran2-скидка-l');
  this.route('i-i-s-restoran2-скидка-e',
  { path: 'i-i-s-restoran2-скидка-e/:id' });
  this.route('i-i-s-restoran2-скидка-e.new',
  { path: 'i-i-s-restoran2-скидка-e/new' });
  this.route('i-i-s-restoran2-сотрудники-l');
  this.route('i-i-s-restoran2-сотрудники-e',
  { path: 'i-i-s-restoran2-сотрудники-e/:id' });
  this.route('i-i-s-restoran2-сотрудники-e.new',
  { path: 'i-i-s-restoran2-сотрудники-e/new' });
  this.route('i-i-s-restoran2-стол-l');
  this.route('i-i-s-restoran2-стол-e',
  { path: 'i-i-s-restoran2-стол-e/:id' });
  this.route('i-i-s-restoran2-стол-e.new',
  { path: 'i-i-s-restoran2-стол-e/new' });
});

export default Router;
