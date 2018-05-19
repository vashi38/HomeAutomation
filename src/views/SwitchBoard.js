// @ts-check
var MySwitch = require('./Switch.js');
class SwitchBoard {
  constructor(id, switches) {
    this.id = id;
    this.switches = Object.values(switches).map(function (sw) {
      return new MySwitch(sw.id, sw.name, sw.type, sw.state);
    });
  }
}

module.exports = SwitchBoard;
