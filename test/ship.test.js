const Ship = require("../dist/ship.js");

const SHIP = new Ship(5);

describe("Ship creation and basic methods", () => {
  it("Create a ship with a custom length", () => {
    expect(SHIP.length).toBe(5);
  });
});
