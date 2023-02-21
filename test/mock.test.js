const { default: axios } = require("axios");

// Using the async example function
const fetchData = async (id) => {
  const result = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  console.log(result);
  return result.data;
};

test("Test case for fetching todo data", async () => {
  jest.spyOn(axios, "get").mockReturnValueOnce({
    data: {
      id: 1,
      todo: "Be Patient",
    },
  });
  const result = await fetchData(1);
  expect(result.todo).toBe("Be Patient");
});

// Defining own foreach function same as array method
const forEachFunction = (items, callBack) => {
  for (let i = 0; i < items.length; i++) {
    callBack(items[i]);
  }
};

describe("Test Group for testing the mock functionality", () => {
  // Defining a mock callback function with its own logic
  const mockCallBackFunction = jest.fn((x) => x + 2);
  forEachFunction([0, 1], mockCallBackFunction);

  test("Should return 2 for calls length", () => {
    expect(mockCallBackFunction.mock.calls.length).toBe(2);
  });

  test("Should return the calls first parameter to be 0", () => {
    expect(mockCallBackFunction.mock.calls[0][0]).toBe(0);
  });

  test("Should return the calls second paramter to be 1", () => {
    expect(mockCallBackFunction.mock.calls[1][0]).toBe(1);
  });

  test("Should return 2 for the result of first callback", () => {
    expect(mockCallBackFunction.mock.results[0].value).toBe(2);
  });

  test("Should return 3 for the result of second callback", () => {
    expect(mockCallBackFunction.mock.results[1].value).toBe(3);
  });
});

describe("Mock return value", () => {
  // Defining the mock function
  const mockValue = jest.fn();

  // Chaining the return value of mock function for each calls
  mockValue
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(3);

  const returnValue1 = mockValue(); // true
  const returnValue2 = mockValue(); // false
  const returnValue3 = mockValue(); // 3
  test("Should check returnValue1 mock value to be true", () => {
    expect(returnValue1).toBe(true);
  });

  test("Should check returnValue2 mock value to be false", () => {
    expect(returnValue2).toBe(false);
  });

  test("Should check returnValue3 mock value to be 3", () => {
    expect(returnValue3).toBe(3);
  });
});
