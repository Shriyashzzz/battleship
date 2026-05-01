import { Ship } from "./Ship.js";

export class GameBoard {
  constructor() {
    this.gridEdge = 10;
    this.battleSpace = Array.from({ length: 10 }, () => Array(10).fill(null));
  }

  placeShip(x, y, ship) {
    shipLength = ship.getLenght();
  }
}
