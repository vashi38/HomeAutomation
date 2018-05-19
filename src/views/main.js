module.exports = {
  template: require("./main1.html"),
  controller: mainController
};

/** @ngInject */
function mainController($log, MyRoomService, MyDataService) {
  var vm = this;
  vm.handleSwitchClick = _handleSwitchClick;
  _init();

  function _init() {
    // var allSwitches = Object.values(getInitialState()).map(function (sw) {
    //   return new MySwitch(sw.id, sw.name, sw.type, sw.state);
    // });
    var allRooms;
    MyRoomService.getRooms().then(function (response) {
      allRooms = response;
      // Object.values(response).map(function (room) {
      //   return new MyRoom(room.id, room.SwitchBoards);
      // });
      $log.log(allRooms);
      // $log.log(SwitchBoard);
      vm.allSwitches = allRooms[0].switchBoards[0].switches;
    });
    // var SwitchBoard = new MySwitchBoard(allSwitches);
  }

  function _handleSwitchClick(sw) {
    sw.toggle();
    MyDataService.sendUpdate(sw.id);
  }
}
