const sillyFunction = require("../src/01-matchers/silly");

describe("Silly Modules test cases", () => {
  test("sillyFunction", () => {
    expect(sillyFunction()).toBe(4);
  });
});
