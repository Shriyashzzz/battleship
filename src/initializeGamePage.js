import { Player } from "./Class/Player.js";
import { getPlayerShips } from "./setupPlayerShips.js";

export const initializeGamePageDom = (playerName) => {
  const playerObj = new Player(playerName);
  const gamePageContent = document.querySelector(".gameSelectContent");
  makeButtons(gamePageContent);
  makeGameBoardDOM(gamePageContent);
  getPlayerShips(playerObj);
};

export function makeGameBoardDOM(gamePageContent) {
  const shipPlaceBoard = document.createElement("div");
  shipPlaceBoard.classList.add("shipPlaceBoard");
  for (let col = 0; col < 10; col++) {
    for (let row = 0; row < 10; row++) {
      const square = document.createElement("div");
      square.id = `[${row},${col}]`;
      square.classList.add("square");
      shipPlaceBoard.append(square);
    }
  }
  gamePageContent.append(shipPlaceBoard);
}

function makeButtons(gamePageContent) {
  const buttonContainer = document.createElement("section");
  buttonContainer.classList.add("shipBtnContainer");
  const carrierBtn = document.createElement("button");
  carrierBtn.textContent = "Carrier(5)";
  carrierBtn.classList.add("carrierBtn", "shipBtn");
  const battleShipBtn = document.createElement("button");
  battleShipBtn.textContent = "BattleShip(4)";
  battleShipBtn.classList.add("battleShipBtn", "shipBtn");
  const cruiserBtn = document.createElement("button");
  cruiserBtn.classList.add("cruiserBtn", "shipBtn");
  cruiserBtn.textContent = "Cruiser(3)";
  const submarineBtn = document.createElement("button");
  submarineBtn.textContent = "Submarine(3)";
  submarineBtn.classList.add("submarineBtn", "shipBtn");
  const destroyerBtn = document.createElement("button");
  destroyerBtn.classList.add("destroyerBtn", "shipBtn");
  destroyerBtn.textContent = "Destroyer(2)";
  buttonContainer.append(
    carrierBtn,
    battleShipBtn,
    cruiserBtn,
    submarineBtn,
    destroyerBtn,
  );
  const gameBtnContainer = document.createElement("div");
  gameBtnContainer.classList.add("gameBtnContainer");
  gameBtnContainer.append(buttonContainer);
  const axisBtn = document.createElement("button");
  axisBtn.textContent = "AXIS:X";
  axisBtn.classList.add("toggleAxis", "shipBtn");
  axisBtn.id = "x";
  const submitBtn = document.createElement("button");
  const submitWrapper = document.createElement("div");
  submitWrapper.classList.add("submitWrapper");
  submitBtn.textContent = "Submit";
  submitBtn.classList.add("shipSubmit", "shipBtn");
  submitWrapper.append(axisBtn, submitBtn);
  gameBtnContainer.append(buttonContainer, submitWrapper);
  gamePageContent.append(gameBtnContainer);
}
