import { GameBoard } from "../src/Class/Gameboard.js";
import { Ship } from "../src/Class/Ship.js";

describe("adds ship horizontally into the gameboard matrix , relative to the ship's length", () => {
  let testGameboard;
  let testShip;
  beforeAll(() => {
    testGameboard = new GameBoard();
    testShip = new Ship(3);
    testGameboard.placeShip(0, 5, testShip, "x");
  });

  it("should place Ship at a specific cordinate (0, 5)", () => {
    const obj = testGameboard.getShip(0, 5);
    expect(obj).toBeInstanceOf(Ship);
  });

  it(`there should also be the same ship at (1, 5)`, () => {
    const obj = testGameboard.getShip(1, 5);
    expect(obj).toBeInstanceOf(Ship);
  });
  it(`there should also be the same ship at (2, 5)`, () => {
    const obj = testGameboard.getShip(2, 5);
    expect(obj).toBeInstanceOf(Ship);
  });
  it(`there should not be a ship at (3, 5), as the ship's length is only 3`, () => {
    const obj = testGameboard.getShip(3, 5);
    const isShip = obj instanceof Ship;
    expect(isShip).toBe(false);
  });
});

describe(`should attack hit a ship and then sends the ‘hit’ function to the correct ship.`, () => {
  let testGameboard;
  let testShip;
  beforeAll(() => {
    testGameboard = new GameBoard();
    testShip = new Ship(3);
    testGameboard.placeShip(0, 5, testShip, "x");
  });

  it(`should hit the ship at the cordinate , 0,5`, () => {
    testGameboard.receiveAttack(0, 5);
    const hitShip = testGameboard.getShip(0, 5);
    expect(hitShip.getHitCount()).toBe(1);
  });
});

it(`checks if all the ships have sunk on the gameBoard`, () => {
  let testGameboard = new GameBoard();
  let testShip = new Ship(3);
  testGameboard.placeShip(0, 5, testShip, "x");

  testGameboard.receiveAttack(0, 5);
  testGameboard.receiveAttack(1, 5);
  testGameboard.receiveAttack(2, 5);

  expect(testGameboard.checkIfLost()).toBe(true);
});
