/*
Dijkstra algorithm
*/
function extractKeys(obj) {
  let keys = [],
    key;
  for (key in obj) {
    Object.prototype.hasOwnProperty.call(obj, key) && keys.push(key);
  }
  return keys;
}

function findPaths(map, start, end) {
  let infinity = Infinity;

  let costs = {},
    open = { "0": [start] },
    predecessors = {},
    keys;

  let addToOpen = function(cost, vertex) {
    let key = "" + cost;
    if (!open[key]) open[key] = [];
    open[key].push(vertex);
  };

  costs[start] = 0;

  while (open) {
    if (!(keys = extractKeys(open)).length) break;

    keys.sort((a, b) => parseFloat(a) - parseFloat(b));

    let key = keys[0],
      bucket = open[key],
      node = bucket.shift(),
      currentCost = parseFloat(key),
      adjacentNodes = map[node] || {};

    if (!bucket.length) delete open[key];

    for (let vertex in adjacentNodes) {
      if (Object.prototype.hasOwnProperty.call(adjacentNodes, vertex)) {
        let cost = adjacentNodes[vertex],
          totalCost = cost + currentCost,
          vertexCost = costs[vertex];

        if (vertexCost === undefined || vertexCost > totalCost) {
          costs[vertex] = totalCost;
          addToOpen(totalCost, vertex);
          predecessors[vertex] = node;
        }
      }
    }
  }

  if (costs[end] === undefined) {
    return null;
  } else {
    return predecessors;
  }
}

function extractShortest(predecessors, end) {
  let nodes = [],
    u = end;

  while (u !== undefined) {
    nodes.push(u);
    u = predecessors[u];
  }

  nodes.reverse();
  return nodes;
}

function findShortestPath(map, nodes) {
  let start = nodes.shift(),
    end,
    predecessors,
    path = [],
    shortest;

  while (nodes.length) {
    end = nodes.shift();
    predecessors = findPaths(map, start, end);

    if (predecessors) {
      shortest = extractShortest(predecessors, end);
      if (nodes.length) {
        path.push.apply(path, shortest.slice(0, -1));
      } else {
        return path.concat(shortest);
      }
    } else {
      return null;
    }

    start = end;
  }
}

function toArray(list, offset) {
  try {
    return Array.prototype.slice.call(list, offset);
  } catch (e) {
    let a = [];
    for (let i = offset || 0, l = list.length; i < l; ++i) {
      a.push(list[i]);
    }
    return a;
  }
}

let Graph = function(map) {
  this.map = map;
};

Graph.prototype.findShortestPath = function(start, end) {
  if (Object.prototype.toString.call(start) === "[object Array]") {
    return findShortestPath(this.map, start);
  } else if (arguments.length === 2) {
    return findShortestPath(this.map, [start, end]);
  } else {
    return findShortestPath(this.map, toArray(arguments));
  }
};

Graph.findShortestPath = function(map, start, end) {
  if (Object.prototype.toString.call(start) === "[object Array]") {
    return findShortestPath(map, start);
  } else if (arguments.length === 3) {
    return findShortestPath(map, [start, end]);
  } else {
    return findShortestPath(map, toArray(arguments, 1));
  }
};

/*array to map conversion
 0 --> a
 1 --> b
 2 --> c
 3 --> d
*/

let numberToLetter = number => {
  switch (number) {
    case 0:
      return "a";
    case 1:
      return "b";
    case 2:
      return "c";
    case 3:
      return "d";
    case 4:
      return "e";
    case 5:
      return "f";
    case 6:
      return "g";
    case 7:
      return "h";
    case 8:
      return "i";
    case 9:
      return "l";
  }
};
let number = 123;
// 1
// 2
// 3
function convertToString(number) {
  let s = number.toString();
  let res = "";
  for (let i = 0; i < s.length; i++) res += numberToLetter(parseInt(s[i]));
  return res;
}
let conversion = convertToString(number);
// console.info(conversion);

let map = {
  a: { b: 3, c: 1 },
  b: { a: 2, c: 1 },
  c: { a: 4, b: 1 }
};
let g = new Graph(map);
// console.info(g.findShortestPath("a", "b")); // => ['a', 'c', 'b']
// console.info(g.findShortestPath("a", "c")); // => ['a', 'c']
// console.info(g.findShortestPath("b", "a")); // => ['b', 'a']
// console.info(g.findShortestPath("b", "c", "b")); // => ['b', 'c', 'b']
// console.info(g.findShortestPath("c", "a", "b")); // => ['c', 'b', 'a', 'c', 'b']
// console.info(g.findShortestPath("c", "b", "a")); // => ['c', 'b', 'a']

module.exports = Graph;
