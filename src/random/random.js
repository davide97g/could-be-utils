/**
 * @name randf
 * @description
 * Generate a random float between `a` and `b` (`b` excluded)
 * @param {Number} a lower bound value
 * @param {Number} b upper bound value
 */
function randf(a, b) {
  return Math.random() * (b - a) + a;
}

/**
 * @name randi
 * @description
 * Generate a random integer between `a` and `b` (`b` excluded)
 * @param {Number} a lower bound value
 * @param {Number} b upper bound value
 */
function randi(a, b) {
  return Math.floor(Math.random() * (b - a) + a);
}

/**
 * @name randiArray
 * @description
 * Generate an array of `N` elements filled with random integer between `a` and `b`
 * @param {Number} a lower bound value
 * @param {Number} b upper bound value
 * @param {Number} N number of elements
 */
function randiArray(a, b, N) {
  let v = [];
  for (let i = 0; i < N; i++) v.push(randi(a, b));
  return v;
}

/**
 * @name randfArray
 * @description
 * Generate an array of `N` elements filled with random float between `a` and `b`
 * @param {Number} a lower bound value
 * @param {Number} b upper bound value
 * @param {Number} N number of elements
 */
function randfArray(a, b, N) {
  let v = [];
  for (let i = 0; i < N; i++) v.push(randf(a, b));
  return v;
}

module.exports = {
  randf: randf,
  randi: randi,
  randiArray: randiArray,
  randfArray: randfArray
};
