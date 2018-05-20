// @ts-check
var MySwitchBoard = require('./SwitchBoard.js');
class Room {
  constructor(id, name, switchBoards) {  
    this.id = id ? id : ++ Room.TOTAL;
    this.name = name;
    if (switchBoards) {
      this.switchBoards = Object.values(switchBoards).map(function (board) {
        return new MySwitchBoard(board.id, board.name, board.switches);
      });
    }
    else
      this.switchBoards = [];
    // this.switchBoards = SwitchBoards;
  }
  getRoomCount() {
    return Room.TOTAL;
  }
  getSwitchBoards() {
    return this.switchBoards;
  }
  addSwitchBoard(name, ip) {
    this.switchBoards.push(new MySwitchBoard(null, name, null));
    // return this;
  }
}

Room.TOTAL = 0;

module.exports = Room;
