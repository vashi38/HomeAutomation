var angular = require('angular');

require('angular-ui-router');
var routesConfig = require('./routes');
var MyDataService = require('./services/data.service');
var MyRoomService = require('./services/room.service');
var allRooms = require('./views/showRooms');
var allSwitchBoards = require('./views/showSwitchBoards');
var allSwitches = require('./views/showSwitches');
require('./index.scss');
require('./views/style.scss');
require('./views/showRoom.scss');
require('./views/showSwitchBoards.scss');

angular
  .module('app', ['ui.router'])
  .component('allRooms', allRooms)
  .component('allSwitchBoards', allSwitchBoards)
  .component('allSwitches', allSwitches)
  .factory('MyDataService', MyDataService)
  .factory('MyRoomService', MyRoomService)
  .config(routesConfig);
