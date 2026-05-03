import { computerPlayer } from "../computerObject.js";
import { showEndGame } from "./endGame.js";

let wasItHit = false;
let hitCoordinates = []; // Track the current ship being hunted
const usedCoordinates = new Set();

export function computerHits(playerObj) {
  const playerGameBoard = playerObj.playerGameBoard;
  let x, y;

  if (wasItHit && hitCoordinates.length > 0) {
    // Hunt mode: Try all 4 directions around last hit
    const lastHit = hitCoordinates[hitCoordinates.length - 1];
    const directions = [
      [lastHit.x + 1, lastHit.y],
      [lastHit.x - 1, lastHit.y],
      [lastHit.x, lastHit.y + 1],
      [lastHit.x, lastHit.y - 1],
    ];

    // Try each direction
    let found = false;
    for (const [nextX, nextY] of directions) {
      const coordKey = `${nextX},${nextY}`;
      if (
        nextX >= 0 &&
        nextX < 10 &&
        nextY >= 0 &&
        nextY < 10 &&
        !usedCoordinates.has(coordKey)
      ) {
        x = nextX;
        y = nextY;
        found = true;
        break;
      }
    }

    // If no valid direction found, go back to random
    if (!found) {
      hitCoordinates = [];
      wasItHit = false;
      return computerHits(playerObj); // Retry in random mode
    }
  } else {
    // Random mode
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (usedCoordinates.has(`${x},${y}`));
  }

  const coordKey = `${x},${y}`;
  usedCoordinates.add(coordKey);

  wasItHit = playerGameBoard.receiveAttack(x, y);

  if (wasItHit) {
    hitCoordinates.push({ x, y });
    if (playerGameBoard.checkIfLost()) {
      // if lost shoq comp won screen
      showEndGame(computerPlayer.playerName, playerObj);
    }
  }
  return { coordinate: [x, y], wasItHit: wasItHit };
}
