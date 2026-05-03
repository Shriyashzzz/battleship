import { forEach } from "lodash";
import { computerPlayer } from "../computerObject.js";
import { computerHits } from "./computerHits.js";
import { showEndGame } from "./endGame.js";
export function startGame(playerObj) {
  const shipRecord = playerObj.playerGameBoard.getShipData();
  colorSquares(shipRecord);
  setupUserHits(playerObj);
}

const colorSquares = (shipRecord) => {
  shipRecord.forEach((row, x) => {
    row.forEach((value, y) => {
      if (value != null) {
        const userSquare = document.querySelector(
          `[id="[${x},${y}]"],[class="userSquare"]`,
        );
        userSquare.style.backgroundColor = "green";
      }
    });
  });
};

const setupUserHits = (playerObj) => {
  const computerBaord = computerPlayer.playerGameBoard;
  const computerSquares = document.querySelectorAll(".computerSquare");
  computerSquares.forEach((square) => {
    square.addEventListener("click", () => {
      const hitId = JSON.parse(square.id);
      const attackResult = computerBaord.receiveAttack(hitId[0], hitId[1]);
      if (attackResult) {
        addHitDom(square);
        if (computerBaord.checkIfLost()) {
          showEndGame(playerObj.playerName);
        }
      } else {
        if (computerBaord.checkIfLost()) {
          showEndGame(playerObj.playerName);
        }
        addMissDom(square);
        const computerResponse = computerHits(playerObj); //{cordinate :[x, y], wasItHit:true/false}
        if (computerResponse.wasItHit) {
          addCompHit(computerResponse.coordinate);
        } else {
          addCompMiss(computerResponse.coordinate);
        }
      }
    });
  });
};

const addHitDom = (square) => {
  square.classList.add("hit");
};

const addMissDom = (square) => {
  square.classList.add("miss");
};

const addCompHit = (cordinate) => {
  const playerSquare = document.querySelector(
    `[id = "[${cordinate[0]},${cordinate[1]}]"],[class = "userSquare"]`,
  );
  playerSquare.classList.add("hit");
};

const addCompMiss = (cordinate) => {
  const playerSquare = document.querySelector(
    `[id = "[${cordinate[0]},${cordinate[1]}]"],[class = "userSquare"]`,
  );
  playerSquare.classList.add("miss");
};
