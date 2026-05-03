import { Player } from "./Class/Player.js";
import { Ship } from "./Class/Ship.js";
/// RANDOM ship cordinate generator
export const computerPlayer = new Player("AI");
const shipConfigs = [];
const shipCordinates = new Set([]);
//randomize computer's ships position
const shipLengths = [5, 4, 3, 3, 2];

const getRadnomIndex = () => {
  return Math.floor(Math.random() * 10);
};

const getRadnomOrientation = () => {
  const randBit = Math.floor(Math.random() * 2);
  if (randBit == 0) {
    return "x";
  }
  return "y";
};

function checkAddCordinates(x, y, length, orientation) {
  let currentCordinates = [];
  if (orientation == "x") {
    for (let currentX = x; currentX < x + length; currentX++) {
      let current = `${currentX},${y}`;
      if (shipCordinates.has(current)) {
        return false;
      } else {
        currentCordinates.push(current);
      }
    }
  } else if (orientation == "y") {
    for (let currentY = y; currentY < y + length; currentY++) {
      let current = `${x},${currentY}`;
      if (shipCordinates.has(current)) {
        return false;
      } else {
        currentCordinates.push(current);
      }
    }
  }
  for (let coordinate of currentCordinates) {
    shipCordinates.add(coordinate);
  }

  return true;
}

function populateValidRandomShip(length) {
  let valid = false;

  while (!valid) {
    const orientation = getRadnomOrientation();
    let randomX, randomY;

    if (orientation === "x") {
      randomX = Math.floor(Math.random() * (11 - length));
      randomY = getRadnomIndex();
    } else {
      randomX = getRadnomIndex();
      randomY = Math.floor(Math.random() * (11 - length));
    }

    if (checkAddCordinates(randomX, randomY, length, orientation)) {
      shipConfigs.push({
        length: length,
        x: randomX,
        y: randomY,
        orientation: orientation,
      });
      valid = true;
    }
  }
}
for (let i = 0; i < shipLengths.length; i++) {
  populateValidRandomShip(shipLengths[i]);
}

shipConfigs.forEach(({ length, x, y, orientation }) => {
  const ship = new Ship(length, orientation);
  computerPlayer.playerGameBoard.placeShip(x, y, ship);
});
