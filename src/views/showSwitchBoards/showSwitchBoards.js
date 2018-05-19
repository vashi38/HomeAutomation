module.exports = {
  template: require("./showSwitchBoards.html"),
  controller: showSwitchBoardsController
};
/** @ngInject */
function showSwitchBoardsController(
  $log,
  MyRoomService,
  MyDataService,
  $state
) {
  var vm = this;

  // $log.log(MyRoomService.getActiveRoom().getSwitchBoards());
  vm.ActiveRoom = MyRoomService.getActiveRoom();
  if(vm.ActiveRoom == null)
    $state.go('AllRooms');

  vm.allSwitchBoards = MyRoomService.getActiveRoom().getSwitchBoards();
  vm.handleSwitchBoardClick = function (selectedSwitchBoard) {
    MyRoomService.setActiveSwitchBoard(selectedSwitchBoard.id);
    // $log.log(selectedSwitchBoard);
    $state.go("AllSwitches");
  };
}
