const MyRoom = require("../views/Room.js");
/** @ngInject */
function MyRoomService(MyDataService) {
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
    return MyDataService.getIntialState().then(function (rooms) {
      allRooms = Object.values(rooms).map(function (room) {
        return new MyRoom(room.id, room.name, room.SwitchBoards);
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
      return allRooms[activeRoomId - 1];
    } else {
      return null;
    }
  }

  function _setActiveSwitchBoard(SwitchBoardId) {
    activeSwitchBoard = SwitchBoardId;
  }
  function _getActiveSwitchBoard() {
    if (allRooms && activeSwitchBoard && activeRoomId) {
      return allRooms[activeRoomId - 1].switchBoards[activeSwitchBoard - 1];
    } else {
      return null;
    }
  }
  return {
    getRooms: _getRooms,
    setActiveRoom: _setActiveRoom,
    getActiveRoom: _getActiveRoom,
    setActiveSwitchBoard: _setActiveSwitchBoard,
    getActiveSwitchBoard: _getActiveSwitchBoard
  };
}
module.exports = MyRoomService;
