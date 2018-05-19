// @ts-check
var MySwitchBoard = require('./SwitchBoard.js');
class Room {
  constructor(id, switchBoards) {
    this.id = id;
    this.switchBoards = Object.values(switchBoards).map(function (board) {
      return new MySwitchBoard(board.id, board.switches);
    });
    // this.switchBoards = SwitchBoards;
  }
}

module.exports = Room;
