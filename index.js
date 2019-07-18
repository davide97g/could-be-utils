//require all the modules
const array = require("./src/array/array");
const random = require("./src/random/random");
const distances = require("./src/distances/distances");
const statistics = require("./src/statistics/statistics");

//test
// console.info("--- array");
// let zeros = array.zeros(5);
// console.table(zeros);
// let arrayW = array.arrayWith("TEST", 10);
// console.table(arrayW);

// console.info("--- random");
// let ri = random.randi(0, 10);
// console.info(ri);
// let rf = random.randf(0, 10);
// console.info(rf);

// console.info("--- distances");
// let distance = new distances();
// let point1 = [1, 1];
// let point2 = [2, 2];
// console.info(distance.minkowski(point1, point2));

// console.info("--- statistics");
// let data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arrayData = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6]];
// let singleArrayData = [[1], [2], [3], [4], [5]];

// console.info(statistics.average(data));
// console.table(statistics.average(arrayData));
// console.table(statistics.average(singleArrayData));
// console.table(statistics.variance(data));
// console.table(statistics.variance(arrayData));
// console.table(statistics.variance(singleArrayData));

//expose all the modules
module.exports = {
  array: array,
  random: random,
  distances: distances,
  statistics: statistics
};
