const distances = require("../../src/distances/distances");

let d = new distances();

test("should create distances object", () => {
  expect(d).not.toBe(null);
});

let point1 = [1, 2];
let point2 = [2, 5];

let dataset = [
  [1, 2],
  [2, 5],
  [-3, -2],
  [-1, -3],
  [4, 5],
  [1, 7],
  [4, -1],
  [-3, 4],
  [2, -2],
  [-5, 6]
];

test("should change the default function if and only if is a known function", () => {
  try {
    d.setDefault("minkowski");
    expect(d.of(point1, point2)).toEqual(4);
    d.setDefault("chebyshev");
    expect(d.of(point1, point2)).toEqual(3);
    d.setDefault("mahalanobis");
    d.setDataSet(dataset);
    expect(d.of(point1, point2)).toEqual(0.9027946061920071);
  } catch (e) {
    expect(e).toBe(null);
  }

  try {
    d.setDefault("new function");
  } catch (e) {
    expect(e).toEqual("not defined, default minkowski");
  }
});
