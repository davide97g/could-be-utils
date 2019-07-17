// generate random float between a and b (b excluded)
function randf(a, b) {
  return Math.random() * (b - a) + a;
}

// generate random integer between a and b (b excluded)
function randi(a, b) {
  return Math.floor(Math.random() * (b - a) + a);
}

module.exports = {
  randf: randf,
  randi: randi
};
