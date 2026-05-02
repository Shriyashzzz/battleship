import { Ship } from "./Ship.js";
import _ from "lodash";
export class GameBoard {
  constructor() {
    this.gridEdge = 10;
    this.battleSpace = Array.from({ length: 10 }, () => Array(10).fill(null));
    this.hitRecords = Array.from({ length: 10 }, () => Array(10).fill(0));
    this.shipBinaryRecords = Array.from({ length: 10 }, () =>
      Array(10).fill(0),
    );
  }

  placeShip(x, y, ship) {
    let shipLength = ship.getLength();
    let orientation = ship.getShipOrientation();
    if (orientation == "x") {
      for (let i = x; i < x + shipLength; i++) {
        this.battleSpace[i][y] = ship;
        this.shipBinaryRecords[i][y] = 1;
        console.log(i, y);
      }
    } else if (orientation == "y") {
      for (let i = y; i < y + shipLength; i++) {
        this.battleSpace[x][i] = ship;
        this.shipBinaryRecords[x][i] = 1;
        console.log(x, i);
      }
    }
  }

  getShip(x, y) {
    return this.battleSpace[x][y];
  }

  receiveAttack(x, y) {
    let ship = this.getShip(x, y);
    if (ship != null) {
      ship.hit();
    }
    this.#addHitRecord(x, y);
  }
  // hitStatus // 0=> missed // 1=> hit
  #addHitRecord(x, y) {
    this.hitRecords[x][y] = 1;
  }

  checkIfLost() {
    // maybe use a filter function to filter where the ships are and if
    //it matches to the corresping hitRecords, and all ships cordinate == 1 at record, return true else return false
    if (_.isEqual(this.shipBinaryRecords, this.hitRecords)) {
      return true;
    }
    return false;
  }
}
