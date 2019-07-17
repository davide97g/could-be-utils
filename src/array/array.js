/**
 * @name utils.js
 * @description
 * a list of utility functions for array
 * @copyright Davide Ghiotto
 */

// create vector of zeros of length n
function zeros(n) {
  let a = new Array(n);
  for (let i = 0; i < n; i++) {
    a[i] = 0;
  }
  return a;
}

//create a copy of the original array
function copyArray(v) {
  let a = new Array(v.length);
  for (let i = 0; i < v.length; i++) {
    a[i] = v[i];
  }
  return a;
}

//create an array based on copy of the value passed from input
function arrayWith(value, N) {
  let a = new Array(N);
  for (let i = 0; i < N; i++) {
    a[i] = value;
  }
  return a;
}

function objectToArray(array) {
  let result = [];
  array.forEach(data => result.push([data.x, data.y]));
  return result;
}

function arrayToObject(array) {
  let result = [];
  array.forEach(data => result.push({ x: data[0], y: data[1] }));
  return result;
}

module.exports = {
  arrayToObject: arrayToObject,
  objectToArray: objectToArray,
  arrayWith: arrayWith,
  copyArray: copyArray,
  zeros: zeros
};
