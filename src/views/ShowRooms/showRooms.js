
module.exports = {
  template: require('./showRooms.html'),
  controller: ShowRoomsController
};
/** @ngInject */
function ShowRoomsController($log, MyRoomService, MyDataService, $state) {
  var vm = this;
  vm.editMode = false;
  MyRoomService.getRooms().then(function (response) {
    vm.allRooms = response;
    // $log.log(vm.allRooms);
  });
  vm.handleRoomClick = function (selectedRoom) {
    MyRoomService.setActiveRoom(selectedRoom.id);
    // $log.log(selectedRoom);
    $state.go('AllSwitchBoards');
  };
  vm.handleEditBtnClick = function () {
    vm.editMode = !vm.editMode;
  };
  vm.handleAddRoomBtnClick = function () {
    $state.go('CreateRoom');
  };
}
