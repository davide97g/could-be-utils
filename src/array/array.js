/**
 * @name array.js
 * @description
 * A list of utilities for arrays
 * @copyright Davide Ghiotto
 */

/**
 * @name zeros
 * @description
 * Creates a new array with `n` zeros
 * @param {Number} n number of zeros
 * @returns {Array} array with `n` zeros
 */
function zeros(n) {
  if (n === 0) return [];
  let a = new Array(n);
  for (let i = 0; i < n; i++) {
    a[i] = 0;
  }
  return a;
}

/**
 * @name copyArray
 * @description
 * Creates a copy of the `v` array
 * @param {Array} v the array you want to copy
 * @returns {Array} a copy of the `v` array
 */
function copyArray(v) {
  let a = new Array(v.length);
  for (let i = 0; i < v.length; i++) {
    a[i] = v[i];
  }
  return a;
}

/**
 * @name arrayWith
 * @description
 * Create a new array of `n` elements, all equal to `value`
 * @param {any} value what you want to fill the array with
 * @param {Number} N length of the new array
 * @returns {Array} array of length `N` filled with `value`
 */
function arrayWith(value, N) {
  if (N === 0) return [];
  let a = new Array(N);
  for (let i = 0; i < N; i++) {
    a[i] = value;
  }
  return a;
}

/**
 * @name objectToArray
 * @description
 * Converts an array of object into an array of arrays
 * @param {Array} array the array to be converted
 * @returns {Array} the converted array with objects inside
 */
function objectToArray(array) {
  let result = [];
  array.forEach(data => {
    let keys = extractKeys(data);
    let v = [];
    for (let i = 0; i < keys.length; i++) v.push(data[keys[i]]);
    result.push(v);
  });
  return result;
}

/**
 * @name arrayToObject
 * @description
 * Converts an `array` of arrays into an array of objects, given a list of ordered `keys`
 * @param {Array} array the array to be converted
 * @param {Array<String>} keys the keys of the objects in the new array
 * @returns {Array<Object>} the array of object with `keys` and values from `array`
 */
function arrayToObject(array, keys) {
  let result = [];
  array.forEach(data => {
    let v = {};
    let max = Math.min(keys.length, data.length);
    for (let i = 0; i < max; i++) {
      v[keys[i]] = data[i];
    }
    result.push(v);
  });
  return result;
}

/**
 * @name extractKeys
 * @description
 * Extracts the keys from an objects and put them inside an array as strings
 * @param {Object} obj the object to where extract the keys from
 * @returns {Array<String>} the array containing the keys of `obj`
 */
function extractKeys(obj) {
  let keys = [];
  let key;
  for (key in obj) {
    Object.prototype.hasOwnProperty.call(obj, key) && keys.push(key);
  }
  return keys;
}

module.exports = {
  zeros: zeros,
  copyArray: copyArray,
  arrayWith: arrayWith,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  extractKeys: extractKeys
};
