const statistics = require("../../src/statistics/statistics");

let values = [1, 3, 5, 7, 2, 6, 8, 2, 8, 5, 6, 2, 7, 1];
let dataset = [
  [1, 2],
  [2, 3],
  [4, 7],
  [-4, -2],
  [-6, -1],
  [0, 4],
  [8, -4],
  [2, 2],
  [-1, 5],
  [7, 5],
  [3, 3]
];

test("statistics should export average function", () => {
  expect(statistics.average).not.toBe(undefined);
  expect(statistics.average).not.toBe(null);
});

test("statistics should export variance function", () => {
  expect(statistics.variance).not.toBe(undefined);
  expect(statistics.variance).not.toBe(null);
});

test("average should return just one value when called with array of values", () => {
  expect(statistics.average(values)).toBe(4.5);
});

test("variance should return just one value when called with array of values", () => {
  expect(statistics.variance(values)).toBe(2.5);
});

test("average should return an array of values when called with array of arrays", () => {
  let averages = statistics.average(dataset);
  expect(averages.length).toBe(dataset[0].length);
  expect(averages).toEqual([1.4545454545454546, 2.1818181818181817]);
});

test("variance should return an array of values when called with array of arrays", () => {
  let variances = statistics.variance(dataset);
  expect(variances.length).toBe(dataset[0].length);
  expect(variances).toEqual([4.00825594273611, 3.157046428033698]);
});
