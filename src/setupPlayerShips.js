import _ from "lodash";
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

  let shipAddedCount = 0;
  let currentButton;
  gameBtnContainer.addEventListener("click", (e) => {
    const hitButton = e.target.classList;
    if (hitButton.contains("carrierBtn")) {
      currentShip = new Ship(5, toggleAxisBtn.id);
      currentButton = e.target;
    } else if (hitButton.contains("battleShipBtn")) {
      currentShip = new Ship(4, toggleAxisBtn.id);
      currentButton = e.target;
    } else if (hitButton.contains("submarineBtn")) {
      currentShip = new Ship(3, toggleAxisBtn.id);
      currentButton = e.target;
    } else if (hitButton.contains("destroyerBtn")) {
      currentShip = new Ship(2, toggleAxisBtn.id);
      currentButton = e.target;
    } else if (hitButton.contains("cruiserBtn")) {
      currentShip = new Ship(3, toggleAxisBtn.id);
      currentButton = e.target;
    }
  });

  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    let squareId = JSON.parse(square.id);
    square.addEventListener("mouseenter", () => {
      if (currentShip && !checkIfCollide(squareId, currentShip, playerObj)) {
        if (currentShip.getShipOrientation() == "x") {
          for (
            let x = squareId[0];
            x < squareId[0] + currentShip.getLength();
            x++
          ) {
            let targetId = `[${x},${squareId[1]}]`;
            let pointerSquare = document.getElementById(targetId);
            if (pointerSquare != null) {
              pointerSquare.classList.add("hoverEnter");
            }
          }
        } else if (currentShip.getShipOrientation() == "y") {
          for (
            let y = squareId[1];
            y < squareId[1] + currentShip.getLength();
            y++
          ) {
            let targetId = `[${squareId[0]},${y}]`;
            let pointerSquare = document.getElementById(targetId);
            if (pointerSquare != null) {
              pointerSquare.classList.add("hoverEnter");
            }
          }
        }
      }
    });
  });
  squares.forEach((square) => {
    let squareId = JSON.parse(square.id);
    square.addEventListener("mouseleave", () => {
      if (currentShip && !checkIfCollide(squareId, currentShip, playerObj)) {
        if (currentShip.getShipOrientation() == "x") {
          for (
            let x = squareId[0];
            x < squareId[0] + currentShip.getLength();
            x++
          ) {
            let targetId = `[${x},${squareId[1]}]`;

            let pointerSquare = document.getElementById(targetId);
            if (pointerSquare != null) {
              pointerSquare.classList.remove("hoverEnter");
            }
          }
        } else if (currentShip.getShipOrientation() == "y") {
          for (
            let y = squareId[1];
            y < squareId[1] + currentShip.getLength();
            y++
          ) {
            let targetId = `[${squareId[0]},${y}]`;

            let pointerSquare = document.getElementById(targetId);
            if (pointerSquare != null) {
              pointerSquare.classList.remove("hoverEnter");
            }
          }
        }
      }
    });
  });

  squares.forEach((square) => {
    square.addEventListener("click", () => {
      if (currentShip) {
        let squareId = JSON.parse(square.id);
        if (!checkIfCollide(squareId, currentShip, playerObj)) {
          playerObj.playerGameBoard.placeShip(
            squareId[0],
            squareId[1],
            currentShip,
          );

          currentButton.disabled = true;
          currentButton.opacity = 0.2;
          currentButton.style.border = "none";

          placeShip(squareId, currentShip);
          currentShip = undefined;

          shipAddedCount += 1;
          console.log(shipAddedCount);
          if (shipAddedCount >= 5) {
            toggleAxisBtn.disabled = true;
            toggleAxisBtn.opacity = 0.2;
            toggleAxisBtn.style.border = "none";
          }
        }
      }
    });
  });
};

const placeShip = (squareId, currentShip) => {
  if (currentShip.getShipOrientation() == "x") {
    for (let x = squareId[0]; x < squareId[0] + currentShip.getLength(); x++) {
      let targetId = `[${x},${squareId[1]}]`;
      console.log(targetId);
      let currentSquare = document.getElementById(targetId);
      if (currentSquare != null) {
        currentSquare.style.backgroundColor = "red";
        console.log(targetId);
      }
    }
  } else if (currentShip.getShipOrientation() == "y") {
    for (let y = squareId[1]; y < squareId[1] + currentShip.getLength(); y++) {
      let targetId = `[${squareId[0]},${y}]`;
      let currentSquare = document.getElementById(targetId);
      if (currentSquare != null) {
        currentSquare.style.backgroundColor = "red";
        console.log(targetId);
      }
    }
  }
};

function checkIfCollide(squareId, ship, playerObj) {
  let collision = false;
  if (ship.getShipOrientation() == "x") {
    for (let x = squareId[0]; x < squareId[0] + ship.getLength(); x++) {
      if (
        (!(x < 10) && !(x < 0)) ||
        playerObj.playerGameBoard.getShip(x, squareId[1]) != null
      ) {
        collision = true;
        return collision;
      }
    }
  } else {
    for (let y = squareId[1]; y < squareId[1] + ship.getLength(); y++) {
      if (
        (!(y < 10) && !(y < 0)) ||
        playerObj.playerGameBoard.getShip(squareId[0], y) != null
      ) {
        collision = true;
        return collision;
      }
    }
  }
  return collision;
}

function hoverOver(currentShip, ship) {
  if (currentShip) {
  }
}

export function getPlayerShips(playerObj) {
  initalizeBtnListeners(playerObj);
}
