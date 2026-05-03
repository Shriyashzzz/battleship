import { forEach } from "lodash";
import { computerPlayer } from "../computerObject.js";
import { computerHits } from "./computerHits.js";
export function renderUserShips(playerObj) {
  const shipRecord = playerObj.playerGameBoard.getShipData();
  colorSquares(shipRecord);
  colorCompSpaceSquares(computerPlayer.playerGameBoard.getShipData()); // temp
  setupUserHits(playerObj);
}

const colorSquares = (shipRecord) => {
  shipRecord.forEach((row, x) => {
    row.forEach((value, y) => {
      if (value != null) {
        const userSquare = document.querySelector(
          `[id = "[${x},${y}]"][class = "userSquare"]`,
        );
        userSquare.style.backgroundColor = "green";
      }
    });
  });
};

//test function
const colorCompSpaceSquares = (shipRecord) => {
  shipRecord.forEach((row, x) => {
    row.forEach((value, y) => {
      if (value != null) {
        const userSquare = document.querySelector(
          `[id = "[${x},${y}]"][class = "computerSquare"]`,
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
          // show player won screen
        }
      } else {
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
  square.style.backgroundColor = "red";
};

const addMissDom = (square) => {
  square.style.backgroundColor = "beige";
};

const addCompHit = (cordinate) => {
  const playerSquare = document.querySelector(
    `[id = "[${cordinate[0]},${cordinate[1]}]"][class = "userSquare"]`,
  );
  playerSquare.style.backgroundColor = "red";
};

const addCompMiss = (cordinate) => {
  const playerSquare = document.querySelector(
    `[id = "[${cordinate[0]},${cordinate[1]}]"][class = "userSquare"]`,
  );
  playerSquare.style.backgroundColor = "beige";
};
