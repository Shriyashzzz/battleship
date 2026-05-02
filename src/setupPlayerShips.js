import { Ship } from "./Class/Ship.js";
const initalizeBtnListeners = (playerObj) => {
  const gameBtnContainer = document.querySelector(".gameBtnContainer");
  const toggleAxisBtn = document.querySelector(".toggleAxis");
  let currentShip;
  const submitBtn = document.querySelector(".shipSubmit");

  submitBtn.addEventListener("click", () => {
    // if all ship added to the graph then ok, if not added not ok
  });
  toggleAxisBtn.addEventListener("click", () => {
    if (toggleAxisBtn.id == "x") {
      toggleAxisBtn.id = "y";
      toggleAxisBtn.textContent = "AXIS:Y";
    } else if (toggleAxisBtn.id == "y") {
      toggleAxisBtn.id = "x";
      toggleAxisBtn.textContent = "AXIS:X";
    }
    if (currentShip) {
      currentShip.setShipOrientation(toggleAxisBtn.id);
    }
  });

  gameBtnContainer.addEventListener("click", (e) => {
    const hitButton = e.target.classList;
    if (hitButton.contains("carrierBtn")) {
      currentShip = new Ship(5, toggleAxisBtn.id);
    } else if (hitButton.contains("battleShipBtn")) {
      currentShip = new Ship(4, toggleAxisBtn.id);
    } else if (hitButton.contains("submarineBtn")) {
      currentShip = new Ship(3, toggleAxisBtn.id);
    } else if (hitButton.contains("destroyerBtn")) {
      currentShip = new Ship(2, toggleAxisBtn.id);
    } else if (hitButton.contains("cruiserBtn")) {
      currentShip = new Ship(3, toggleAxisBtn.id);
    }
  });
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("click", () => {
      if (currentShip) {
        console.log(currentShip);
        let squareId = JSON.parse(square.id);

        playerObj.playerGameBoard.placeShip(
          squareId[0],
          squareId[1],
          currentShip,
        );
      }
    });
  });
};

const placeShip = (squareId) => {};

export function getPlayerShips(playerObj) {
  initalizeBtnListeners(playerObj);
}
