import { GameBoard } from "./Gameboard";

export class Player {
  constructor(playerName) {
    this.playerName = playerName;
    this.playerGameBoard = new GameBoard();
  }
}
