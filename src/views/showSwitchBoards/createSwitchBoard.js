module.exports = {
  template: require("./createSwitchBoard.html"),
  controller: CreateRoomController
};
/** @ngInject */
function CreateRoomController($log, MyRoomService, MyDataService, $state) {
  var vm = this;
  vm.ActiveRoom = MyRoomService.getActiveRoom();
  if (!MyRoomService.ValidateNavigation()){
    $state.go('AllRooms');
  }
  var _handleAddBtnClick = function () {
    if (!vm.SBName || !vm.IPAdd)
      alert('Switchboard Name and IP address are mandatory...');
    else {
      if (!MyRoomService.createSwitchBoard(vm.SBName)) {
        $state.go('AllSwitchBoards');
      }
      $log.log('Room Name:' + vm.SBName);
      alert('Switch Board added sucessfully');
      $state.go('AllSwitchBoards');
    }
  };

  this.handleAddBtnClick = _handleAddBtnClick;
}
