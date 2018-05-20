const MyRoom = require("../views/classes/Room.js");
/** @ngInject */
function MyRoomService(MyDataService, $log) {
  /**
   * allr\Rooms --> holds all rooms. Once initialised, no more API calls
   */
  var allRooms;
  var activeRoomId;
  var activeSwitchBoard;
  function _getRooms() {
    if (allRooms) {
      return Promise.resolve(allRooms);
    }
    return MyDataService.getIntialState().then(function(rooms) {
      $log.log(rooms);
      allRooms = Object.values(rooms).map(function(room) {
        return new MyRoom(room.id, room.name, room.switchBoards);
      });
      return allRooms;
      // .map(r => ({
      //   id: r.id,
      //   name: r.name
      // }));
    });
  }
  function _setActiveRoom(roomId) {
    activeRoomId = roomId;
  }
  function _getActiveRoom() {
    if (allRooms && activeRoomId) {
      return allRooms.filter(function (rm) {
        return rm.id === activeRoomId;
      })[0];
      // return allRooms[activeRoomId - 1];
    } else {
      return null;
    }
  }

  function _setActiveSwitchBoard(SwitchBoardId) {
    activeSwitchBoard = SwitchBoardId;
  }
  function _getActiveSwitchBoard() {
    if (allRooms && activeSwitchBoard && activeRoomId) {
      return _getActiveRoom().switchBoards.filter(function(sb) {
        return sb.id === activeSwitchBoard;
      })[0];
    } else {
      return null;
    }
  }

  function _createRoom(name) {
    if (!allRooms) {
      return null;
    }
    var newRoom = new MyRoom(null, name, null);
    // $log.log(allRooms);
    allRooms.push(newRoom);
    $log.log(allRooms);
    MyDataService.storeToLS(allRooms);
    return true;
  }

  function _createSwitchBoard(name, ip) {
    if (!allRooms && !_getActiveRoom()) {
      return null;
    }
    _getActiveRoom().addSwitchBoard(name, ip);
    $log.log(allRooms);
    MyDataService.storeToLS(allRooms);
    return true;
  }

  function _ValidateNavigation() {
    if (!allRooms) {
      return null;
    }
    return true;
  }

  return {
    getRooms: _getRooms,
    createRoom: _createRoom,
    createSwitchBoard: _createSwitchBoard,
    setActiveRoom: _setActiveRoom,
    getActiveRoom: _getActiveRoom,
    setActiveSwitchBoard: _setActiveSwitchBoard,
    getActiveSwitchBoard: _getActiveSwitchBoard,
    ValidateNavigation: _ValidateNavigation
  };
}
module.exports = MyRoomService;
