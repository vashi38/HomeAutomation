module.exports = {
  template: require("./showSwitches.html"),
  controller: showSwitchesController
};

/** @ngInject */
function showSwitchesController($log, MyRoomService, MyDataService) {
  var vm = this;
  vm.handleSwitchClick = _handleSwitchClick;
  _init();

  function _init() {
    // $log.log(MyRoomService.getActiveSwitchBoard());
    vm.allSwitches = MyRoomService.getActiveSwitchBoard().getSwitches();
  }

  function _handleSwitchClick(sw) {
    sw.toggle();
    MyDataService.sendUpdate(sw.id);
  }
}
