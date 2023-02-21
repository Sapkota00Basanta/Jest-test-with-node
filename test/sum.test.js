const sum = require("../src/01-matchers/sum");

describe("Sum Function test", () => {
  test("Check if the sum value returned is 3 for 1 and 2", () => {
    const sumResult = sum(1, 2);
    expect(sumResult).toEqual(3);
  });

  test("Object assignment check", () => {
    const objectExample = {};
    expect(objectExample).toEqual({});
  });
});

describe("truthy & falsy", () => {
  test("Null Check", () => {
    const nullValueVariable = null;
    expect(nullValueVariable).toBeFalsy();
    // Not recommneded to use multiple expectnull assertion tests in a single test
    expect(nullValueVariable).not.toBeTruthy(); // Check if the value is not truthy
    expect(nullValueVariable).toBeNull(); // Check if the value is null
    expect(nullValueVariable).not.toBeUndefined(); // Check if the value is undefined
  });
});

describe("Checking with numbers", () => {
  test("add 2 + 2 is equal to 4", () => {
    const numberValueVariable = 2 + 2;
    expect(numberValueVariable).toBe(4);
    expect(numberValueVariable).toBeGreaterThan(3);
    expect(numberValueVariable).toBeGreaterThanOrEqual(4);
    expect(numberValueVariable).toBeLessThan(5);
    expect(numberValueVariable).toBeLessThanOrEqual(4);
  });

  test("floating numbers", () => {
    const numberVariableValue = 0.1 + 0.2;
    expect(numberVariableValue).toBeCloseTo(0.299);
  });
});

describe("Testing Strings", () => {
  test("Check if there is no i in team", () => {
    expect("team").not.toMatch(/I/); // Checks using regular expression to see if there is i
    // There are other matcher methods which can be used to check specfically for string
  });
});

describe("Checking Arrays", () => {
  test("Check if the array value contains something", () => {
    const shoppingArrayList = ["daipers", "klenexx", "paper towel"];
    expect(shoppingArrayList).toContain("daipers");
  });
  // There are other matcher methods for checking array values
});

const expectionThrowFunction = () => {
  throw new Error("You are using wrong function ");
};

describe("Checking Expections", () => {
  test("Cheking a expection throwing function", () => {
    expect(() => expectionThrowFunction()).toThrow();
    expect(() => expectionThrowFunction()).toThrow(Error);
    expect(() => expectionThrowFunction()).toThrow(
      "You are using wrong function "
    );
  });
});
