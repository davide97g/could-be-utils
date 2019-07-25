global.console = {
  log: jest.fn(),
  info: jest.fn(),
  error: jest.fn(),
  warn: jest.fn()
};

const distances = require("../../src/distances/distances");

let d = new distances();

test("should create distances object", () => {
  expect(d).not.toBe(null);
});

let point1 = [1, 2];
let point2 = [2, 5];
let point3 = [-1, 6];

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

test("should set the degree for minkowski function correctly", () => {
  d.setDefault("minkowski");
  d.setMinkowskiDegree(1);
  expect(d.of(point1, point2)).toEqual(4);
  d.setMinkowskiDegree(); //forget the value => should set 1 by default
  expect(d.of(point1, point2)).toEqual(4);
  d.setMinkowskiDegree(-2); //setting a non acceptable vale => should set 1 by default
  expect(d.of(point1, point2)).toEqual(4);
  d.setMinkowskiDegree(2);
  expect(d.of(point1, point2)).toEqual(3.162277660168379);
  d.setMinkowskiDegree(3);
  expect(d.of(point1, point2)).toEqual(3.0365889718756622);
  d.setMinkowskiDegree(5);
  expect(d.of(point1, point2)).toEqual(3.0024650813881837);
});

test("only between points with equal features can be measured distance", () => {
  let wrong_point = [1, 2, 3];
  try {
    d.minkowski(point1, wrong_point);
  } catch (e) {
    expect(e).toEqual("points of different lengths");
  }

  try {
    d.chebyshev(point1, wrong_point);
  } catch (e) {
    expect(e).toEqual("points of different lengths");
  }

  try {
    d.mahalanobis(point1, wrong_point);
  } catch (e) {
    expect(e).toEqual("points of different lengths");
  }

  d.of(point1, wrong_point);
  expect(global.console.warn).toHaveBeenCalledWith(
    "points of different lengths"
  );
});

test("mahalanobis should work only if a dataset has been provided", () => {
  let d2 = new distances();
  try {
    d2.mahalanobis(point1, point2);
  } catch (e) {
    expect(e).toEqual("no data");
  }
});
