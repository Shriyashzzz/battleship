import { Ship } from "../src/Class/Ship";

describe("ship class tests", () => {
  const battleShip = new Ship(2);
  battleShip.hit();
  battleShip.hit();
  it("hit count test", () => {
    expect(battleShip.getHitCount()).toBe(2);
  });

  it("checks if the ship is sunked", () => {
    expect(battleShip.isSunk()).toBe(true);
  });
});
