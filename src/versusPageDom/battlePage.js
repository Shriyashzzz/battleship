import { audioChoice } from "../homepageDom/homepage.js";
import { makeGameBoardDOM } from "../shipPlaceDom/initializeGamePage.js";
import { startGame } from "./renderUserShips.js";

export const createBattlePage = (playerObj) => {
  let shipInfo = playerObj.playerGameBoard.battleSpace;
  cleanPage(playerObj);
  startGame(playerObj);
};

function cleanPage(playerObj) {
  const gameSelectContent = document.querySelector(".gameSelectContent");
  gameSelectContent.classList.add("battlePageContent");
  gameSelectContent.classList.remove("gameSelectContent");
  gameSelectContent.innerHTML = "";
  const gameName = document.createElement("p");
  gameName.textContent = "BATTLESHIP";
  const battlePageContent = document.querySelector(".battlePageContent");
  const gridWrapper = document.createElement("div");
  gridWrapper.classList.add("gridWrapper");

  makeGameBoardDOM(gridWrapper, "userBoard", "userSquare");
  makeGameBoardDOM(gridWrapper, "computerBoard", "computerSquare");

  const userBoard = document.querySelector(".userBoard");

  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.classList.remove("square");
  });

  const playerNamesWrapper = document.createElement("div");
  playerNamesWrapper.classList.add("playerNamesWrapper");
  const userName = document.createElement("p");
  const computerName = document.createElement("p");
  userName.textContent = `Captain ${playerObj.playerName}`;
  const vsPara = document.createElement("p");
  vsPara.textContent = "VS";
  computerName.textContent = "Not so Advanced AI";
  playerNamesWrapper.append(userName, vsPara, computerName);
  battlePageContent.append(gameName, playerNamesWrapper, gridWrapper);
}
