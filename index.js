//require all the modules
const array = require("./src/array/array");
const random = require("./src/random/random");
const distances = require("./src/distances/distances");
const statistics = require("./src/statistics/statistics");
const graph = require("./src/graph/graph");

//expose all the modules
module.exports = {
  array: array,
  random: random,
  distances: distances,
  statistics: statistics,
  graph: graph
};
