const array = require("../../src/array/array");
test("function zeros should return an array full of zeros", () => {
  let v = [1, 2, 3, 4, 5];
  let zeros = array.zeros(v.length);
  expect(zeros.length).toEqual(v.length);
  for (let i = 0; i < zeros.length; i++) expect(zeros[i]).toEqual(0);
  expect(array.zeros(0).length).toEqual(0);
});

test("function copyArray should return a copy array of the original array", () => {
  let v = [1, 2, 3, 4, 5];
  let copy = array.copyArray(v);
  expect(copy.length).toEqual(v.length);
  for (let i = 0; i < copy.length; i++) expect(copy[i]).toEqual(v[i]);
  expect(array.copyArray([])).toEqual([]);
});

test("function arrayWith should return an array with N values all equals", () => {
  let v = array.arrayWith(5, 5);
  expect(v.length).toEqual(5);
  for (let i = 0; i < v.length; i++) expect(v[i]).toEqual(5);
  expect(array.arrayWith(2, 0)).toEqual([]);
});

test("function objectToArray should return an array of arrays", () => {
  let objectArray = [
    { x: 1, y: 2, z: 1 },
    { x: 2, y: 3 },
    { x: -3, y: 0 },
    { x: 5, y: -2 },
    { x: 4, y: -1 }
  ];
  let v = array.objectToArray(objectArray);
  for (let i = 0; i < v.length; i++) {
    expect(v[i].length).toEqual(array.extractKeys(objectArray[i]).length);
  }
});

test("function objectToArray should return an array of objects", () => {
  let v = [[1, 2], [2, 3], [-3, 0], [5, -2], [4, -1]];
  let objectArray = array.arrayToObject(v, ["x", "y"]);
  for (let i = 0; i < objectArray.length; i++) {
    expect(array.extractKeys(objectArray[i])).toEqual(["x", "y"]);
  }
});
