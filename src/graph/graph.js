const Dijkstra = require("./dijkstra");
// const shortest = require("./shortestpath");
const BellmanFord = require("./bellman-ford");
// const map = require("../map/map");
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

// const random = require("../random/random");

// let big = 100;
// let big_array = new Array(big);
// for (let i = 0; i < big; i++) {
//   big_array[i] = random.randiArray(0, 10, big);
// }

//DIJKSTRA
// console.info("DIJKSTRA");
// console.time("dijkstra");
// let m = map.arrayToMap(array);
// // console.table(m);
// let g = new Dijkstra(m);
// let pathD = g.findShortestPath("00", "12");
// // console.table(pathD);
// console.timeEnd("dijkstra");

// //SHORTEST PATH
// console.info("SHORTEST PATH");
// console.time("shortest");
// let cost = shortest.bottomUp(array);
// let pathS = shortest.findPath(cost);
// console.timeEnd("shortest");

// console.table(cost);
// // console.table(pathD);
// console.table(pathS);
// if (pathD.length !== pathS.length) console.warn("different solutions");
// else {
//   let different = false;
//   for (let i = 0; i < pathD.length; i++) {
//     if (pathD[i] !== pathS[i]) {
//       console.warn("different solutions in " + i);
//       different = true;
//     }
//   }
//   if (!different) console.info("same solution");
// }

// let map = {
//   a: { b: 3, c: 1 },
//   b: { a: 2, c: 1 },
//   c: { a: 1, b: 1 },
//   d: { a: 4 }
// };
// let g = new BellmanFord(map);
// let paths = g.BellmanFord("d");
// console.table(paths);

module.exports = {
  Dijkstra: Dijkstra,
  BellmanFord: BellmanFord
};
