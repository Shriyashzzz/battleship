import { GameBoard } from "../src/Class/Gameboard";
import { Player } from "../src/Class/Player";

it("has its own gameboard", () => {
  let testPlayer = new Player("Shriyash");
  expect(testPlayer.playerGameBoard).toBeInstanceOf(GameBoard);
});
