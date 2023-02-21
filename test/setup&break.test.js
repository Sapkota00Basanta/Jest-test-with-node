// Example Array consisting of animals name
let animals = ["elephant", "donkey", "tiger", "rhino"];

// Using beforeAll method of jest to run any code block before all test case
// beforeAll(() => {
//   console.log("Running test before running all the test case");
//   animals = ["elephant", "donkey", "tiger", "rhino"];
// });

// Using beforeeach method of jest to run any code block before each test
beforeEach(() => {
  console.log("Running the code before each test case");
  animals = ["elephant", "donkey", "tiger", "rhino"];
});

// Using afterEach method of jest to run any code block afer each test
// afterEach(() => {
//   console.log("Running the code after each test case");
//   animals = ["elephant", "donkey", "tiger", "rhino"];
// });

// Using afterAll method of jest to run any code block after all running all test case
// afterAll(() => {
//   console.log("Running the code after running all test");
//   animals = ["elephant", "donkey", "tiger", "rhino"];
// });

describe("Test Group consisting test cases related to animals array", () => {
  test("Should add another animal to the end of array", () => {
    animals.push("monkey");
    expect(animals[animals.length - 1]).toBe("monkey");
  });

  test("Should add another animal at the beginning of array", () => {
    animals.unshift("aligator");
    expect(animals[0]).toBe("aligator");
  });

  test("Should always return the initial length of animals array to be 4", () => {
    expect(animals.length).toBe(4);
  });
});
