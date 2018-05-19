var angular = require('angular');

require('angular-ui-router');
var routesConfig = require('./routes');
var MyDataService = require('./services/data.service');
var MyRoomService = require('./services/room.service');
var allRooms = require('./views/showRooms/showRooms');
var allSwitchBoards = require('./views/showSwitchBoards/showSwitchBoards');
var allSwitches = require('./views/showSwitches/showSwitches');
require('./index.scss');
require('./views/showSwitches/style.scss');
require('./views/showRooms/showRoom.scss');
require('./views/showSwitchBoards/showSwitchBoards.scss');

angular
  .module('app', ['ui.router'])
  .component('allRooms', allRooms)
  .component('allSwitchBoards', allSwitchBoards)
  .component('allSwitches', allSwitches)
  .factory('MyDataService', MyDataService)
  .factory('MyRoomService', MyRoomService)
  .config(routesConfig);
