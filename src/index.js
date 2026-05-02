import "./style.css";
import "./homepageDom/homepage.js";
import { Player } from "./Class/Player.js";
import { Ship } from "./Class/Ship.js";
import { createBattlePage } from "./versusPageDom/battlePage.js";

function skipToGameSelect() {
  const userNameInput = document.querySelector("#userName");

  userNameInput.value = "Shriyash";

  const startBtn = document.querySelector(".startBtn");

  startBtn.click();
}
export function devSkipToGame() {
  const playerObj = new Player("TestPlayer"); // or however you create it

  const shipConfigs = [
    { length: 5, x: 0, y: 0, orientation: "x" },
    { length: 4, x: 0, y: 2, orientation: "x" },
    { length: 3, x: 0, y: 4, orientation: "x" },
    { length: 3, x: 0, y: 6, orientation: "x" },
    { length: 2, x: 0, y: 8, orientation: "x" },
  ];

  shipConfigs.forEach(({ length, x, y, orientation }) => {
    const ship = new Ship(length, orientation);
    playerObj.playerGameBoard.placeShip(x, y, ship);
  });

  createBattlePage(playerObj);
}
skipToGameSelect();
devSkipToGame();
