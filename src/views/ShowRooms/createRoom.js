module.exports = {
  template: require("./createRoom.html"),
  controller: CreateRoomController
};
/** @ngInject */
function CreateRoomController($log, MyRoomService, MyDataService, $state) {
  var vm = this;
  if (!MyRoomService.ValidateNavigation()){
    $state.go('AllRooms');
  }
  var _handleAddBtnClick = function () {
    if (!vm.roomName)
      alert('Room Name is required...');
    else {
      if (!MyRoomService.createRoom(vm.roomName)){
        $state.go('AllRooms');
      }
      $log.log('Room Name:' + vm.roomName);
      alert('Room added sucessfully');
      $state.go('AllRooms');
    }
  };

  this.handleAddBtnClick = _handleAddBtnClick;
}
