// @ts-check
var MySwitchBoard = require('./SwitchBoard.js');
class Room {
  constructor(id, name, switchBoards) {
    this.id = id;
    this.name = name;
    this.switchBoards = Object.values(switchBoards).map(function (board) {
      return new MySwitchBoard(board.id, board.name, board.switches);
    });
    
    // this.switchBoards = SwitchBoards;
  }

  getSwitchBoards() {
    return this.switchBoards;
  }
}

module.exports = Room;
