const zeros = require("../array/array").zeros;
function bottomUp(map) {
  let N = map.length;
  let M = map[0].length;
  let c = new Array(N);
  for (let i = 0; i < N; i++) c[i] = zeros(M);

  for (let i = N - 1; i >= 0; i--) {
    for (let j = M - 1; j >= 0; j--) {
      c[i][j] = map[i][j];
      if (i === N - 1 && j === M - 1) continue;
      else if (i !== N - 1 && j !== M - 1) {
        c[i][j] += Math.min(c[i][j + 1], c[i + 1][j]);
      } else {
        if (i === N - 1) c[i][j] += c[i][j + 1];
        else c[i][j] += c[i + 1][j];
      }
    }
  }
  return c;
}

function findPath(c) {
  let N = c.length;
  let M = c[0].length;
  let path = new Array(N + M - 2);
  let row = 0;
  let column = 0;
  while (row + column <= N + M - 2) {
    path[row + column] = "" + row + column;
    // c[row][column] = "*" + c[row][column]; // * = solution
    down = row === N - 1 ? Infinity : c[row + 1][column];
    right = column === M - 1 ? Infinity : c[row][column + 1];
    if (down <= right) row++;
    else column++;
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
