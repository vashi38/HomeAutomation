var angular = require('angular');

require('angular-ui-router');
var routesConfig = require('./routes');
var MyDataService = require('./services/data.service');
var MyRoomService = require('./services/room.service');
var main = require('./views/main');
require('./index.scss');
require('./views/style.scss');

angular
  .module('app', ['ui.router'])
  .component('main', main)
  .factory('MyDataService', MyDataService)
  .factory('MyRoomService', MyRoomService)
  .config(routesConfig);
