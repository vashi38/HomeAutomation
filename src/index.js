var angular = require('angular');

require('angular-ui-router');
var routesConfig = require('./routes');
var MyDataService = require('./services/data.service');
var MyRoomService = require('./services/room.service');

var allRooms = require('./views/showRooms/showRooms');
var allSwitchBoards = require('./views/showSwitchBoards/showSwitchBoards');
var allSwitches = require('./views/showSwitches/showSwitches');
var createRoom = require('./views/showRooms/createRoom');
var createSB = require('./views/showSwitchBoards/createSwitchBoard');

require('./index.scss');
require('./views/showSwitches/style.scss');
require('./views/showRooms/showRoom.scss');
require('./views/showRooms/createRoom.scss');
require('./views/showSwitchBoards/showSwitchBoards.scss');
require('./views/showSwitchBoards/createSwitchBoard.scss');

angular
  .module('app', ['ui.router'])
  .component('allRooms', allRooms)
  .component('allSwitchBoards', allSwitchBoards)
  .component('allSwitches', allSwitches)
  .component('createRoom', createRoom)
  .component('createSB', createSB)
  .factory('MyDataService', MyDataService)
  .factory('MyRoomService', MyRoomService)
  .config(routesConfig);
