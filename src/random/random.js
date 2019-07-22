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

module.exports = {
  randf: randf,
  randi: randi
};
