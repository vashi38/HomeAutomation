module.exports = {
  template: require('./createRoom.html'),
  controller: CreateRoomController
};
/** @ngInject */
function CreateRoomController($log, MyRoomService, MyDataService, $state) {
  var vm = this;
  vm.editMode = false;
  var activeRoom;
  if (!MyRoomService.ValidateNavigation()) {
    $state.go('AllRooms');
  }
  if (MyRoomService.getActiveRoom()) {
    activeRoom = MyRoomService.getActiveRoom();
    vm.roomName = activeRoom.name;
    vm.editMode = true;
  }
  var _handleAddBtnClick = function () {
    if (!vm.roomName) 
      alert('Room Name is required...');
    else {
      if (!MyRoomService.createRoom(vm.roomName)) {
        $state.go('AllRooms');
      }
      $log.log('Room Name:' + vm.roomName);
      alert('Room added sucessfully');
      $state.go('AllRooms');
    }
  };

  var _handleSaveBtnClick = function () {
    if (!vm.roomName) 
    alert('Room Name is required...');
    else {
      if (!MyRoomService.updateRoom(activeRoom, vm.roomName)) {
        $state.go('AllRooms');
      }
      $log.log('Room Name:' + vm.roomName);
      alert('Room details updated sucessfully');
      $state.go('AllRooms');
    }
  };

  this.handleAddBtnClick = _handleAddBtnClick;
  this.handleSaveBtnClick = _handleSaveBtnClick;
}
