const MyRoom = require('../views/Room.js');
/** @ngInject */
function MyRoomService(MyDataService) {
  /**
   * allr\Rooms --> holds all rooms. Once initialised, no more API calls
   */
  var allRooms;

  function _getRooms() {
    if (allRooms) {
      return Promise.resolve(allRooms);
    }
    return MyDataService.getIntialState().then(function (rooms) {
      allRooms = Object.values(rooms).map(function (room) {
        return new MyRoom(room.id, room.SwitchBoards);
      });
      return allRooms;
      // .map(r => ({
      //   id: r.id,
      //   name: r.name
      // }));
    });
  }

  return {
    getRooms: _getRooms
  };
}
module.exports = MyRoomService;
