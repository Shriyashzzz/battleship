import { Player } from "./Class/Player.js";
import { Ship } from "./Class/Ship.js";

export const computerPlayer = new Player("ComputerPlayer");

const shipConfigs = [
  { length: 5, x: 0, y: 0, orientation: "x" },
  { length: 4, x: 0, y: 2, orientation: "x" },
  { length: 3, x: 0, y: 4, orientation: "x" },
  { length: 3, x: 0, y: 6, orientation: "x" },
  { length: 2, x: 0, y: 8, orientation: "x" },
];

shipConfigs.forEach(({ length, x, y, orientation }) => {
  const ship = new Ship(length, orientation);
  computerPlayer.playerGameBoard.placeShip(x, y, ship);
});
