const zeros = require("../array/array").zeros;
const arrayWith = require("../array/array").arrayWith;
function bottomUp(map) {
  let N = map.length;
  let M = map[0].length;
  let c = new Array(N);
  for (let i = 0; i < N; i++) {
    c[i] = zeros(M);
    c[i].push(Infinity);
  }
  c.push(arrayWith(Infinity, M));
  c[N - 1][M] = 0;
  c[N][M - 1] = 0;
  for (let i = N - 1; i >= 0; i--) {
    for (let j = M - 1; j >= 0; j--) {
      c[i][j] = map[i][j];
      let right = c[i][j + 1];
      let down = c[i + 1][j];
      if (down < right) {
        c[i][j] += down;
      } else {
        c[i][j] += right;
      }
    }
  }
  return c;
}

function findPath(c, x, y, endX, endY) {
  let path = [];
  let N = c.length - 1;
  let M = c[0].length - 1;
  let X = endX || N - 1;
  let Y = endY || M - 1;
  path.push("" + x + y);
  for (let i = x; i < N; i++) {
    for (let j = y; j < M; j++) {
      if (i == X && j == Y) return path;
      let right = c[i][j + 1];
      let down = c[i + 1][j];
      if (down <= right) {
        path.push("" + (i + 1) + j);
        i++;
        j--;
      } else {
        path.push("" + i + (j + 1));
      }
    }
  }
  return path;
}

// let map = [
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

// let map2 = [
//   [1, 1, 3, 4, 1],
//   [1, 1, 3, 1, 1],
//   [2, 2, 3, 4, 1],
//   [1, 2, 4, 2, 2],
//   [2, 2, 4, 2, 5]
// ];

// console.time("shortest");

// let cost = bottomUp(big_map);
// // console.table(cost);
// let path = findPath(cost, 0, 0);
// // console.table(path);

// console.timeEnd("shortest");

module.exports = {
  bottomUp: bottomUp,
  findPath: findPath
};
