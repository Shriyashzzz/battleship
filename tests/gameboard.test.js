import { GameBoard } from "../src/Gameboard.JS";

describe("GameBoard Test", () => {
  const testGameboard = new GameBoard();
  it("should palce Ship at a specif Cordinate", () => {
    expect(testGameboard.placeShip(3, 5)).toBe(true);
  });
});
