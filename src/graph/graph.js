const Dijkstra = require("./dijkstra");
const shortest = require("./shortestpath");
const map = require("../map/map");
// let array = [
//   [1, 1, 3, 4, 1, 4, 6, 8, 2, 6, 4],
//   [1, 1, 3, 1, 1, 1, 3, 2, 0, 1, 2],
//   [2, 2, 3, 4, 1, 4, 3, 6, 8, 2, 4],
//   [1, 2, 4, 2, 2, 1, 1, 2, 3, 2, 5],
//   [2, 2, 4, 2, 5, 1, 3, 5, 6, 2, 6],
//   [3, 4, 3, 5, 5, 1, 5, 7, 8, 4, 2],
//   [4, 3, 4, 5, 5, 1, 2, 2, 3, 2, 1],
//   [1, 2, 4, 2, 2, 1, 1, 2, 3, 2, 5],
//   [1, 7, 3, 2, 3, 8, 5, 6, 1, 1, 4]
// ];

const random = require("../random/random");

let big = 100;
let big_array = new Array(big);
for (let i = 0; i < big; i++) {
  big_array[i] = random.randiArray(0, 10, big);
}

//DIJKSTRA
console.info("DIJKSTRA");
console.time("dijkstra");
let g = new Dijkstra(map.arrayToMap(big_array));
let pathD = g.findShortestPath("00", "9999");
console.timeEnd("dijkstra");

//SHORTEST PATH
console.info("SHORTEST PATH");
console.time("shortest");
let cost = shortest.bottomUp(big_array);
console.info(cost[0][0]);
let pathS = shortest.findPath(cost, 0, 0);
console.timeEnd("shortest");

// console.table(pathD);
// console.table(pathS);
if (pathD.length !== pathS.length) console.warn("different solutions");
else {
  let different = false;
  for (let i = 0; i < pathD.length; i++) {
    if (pathD[i] !== pathS[i]) {
      console.warn("different solutions in " + i);
      different = true;
    }
  }
  if (!different) console.info("same solution");
}

module.exports = {
  Dijkstra: Dijkstra
};
