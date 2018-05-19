// @ts-check
var MySwitch = require('./Switch.js');
class SwitchBoard {
  constructor(id, name, switches) {
    this.id = id;
    this.name = name;
    this.switches = Object.values(switches).map(function (sw) {
      return new MySwitch(sw.id, sw.name, sw.type, sw.state);
    });
  }
  getSwitches() {
    return this.switches;
  }
}

module.exports = SwitchBoard;
