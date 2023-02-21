const fetchData = require("../src/02-async/async");

describe("Async functions test case", () => {
  test("fetchData async test function", async () => {
    const result = await fetchData(2);
    expect(result.id).toBe(2);
  });
});
