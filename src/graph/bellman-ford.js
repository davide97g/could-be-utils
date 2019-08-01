const array = require("../array/array");
const extractKeys = array.extractKeys;
// An object to represent a weighted edge in graph
const createEdge = () => {
  return {
    src: 0,
    dest: 0,
    weight: 0
  };
};

// Creates a graph with V vertices and E edges
const Graph = function(map) {
  let keys = extractKeys(map);
  this.keys = keys;
  this.V = keys.length;
  let e = 0;
  let secondaryKeys;
  this.edge = [];
  for (let i = 0; i < keys.length; i++) {
    secondaryKeys = extractKeys(map[keys[i]]);
    e += secondaryKeys.length;
    for (let j = 0; j < secondaryKeys.length; j++) {
      let edge = createEdge();
      edge.src = keys[i];
      edge.dest = secondaryKeys[j];
      edge.weight = map[keys[i]][secondaryKeys[j]];
      this.edge.push(edge);
    }
  }
  this.E = e;
};

Graph.prototype = {
  // The main function that finds shortest distances from src
  // to all other vertices using Bellman-Ford algorithm.  The
  // function also detects negative weight cycle
  BellmanFord: function(src) {
    let V = this.V;
    let E = this.E;
    let dist = {};
    for (let i = 0; i < this.keys.length; i++) {
      dist[this.keys[i]] = Infinity;
    }
    dist[src] = 0;

    // Step 2: Relax all edges |V| - 1 times. A simple
    // shortest path from src to any other vertex can
    // have at-most |V| - 1 edges
    for (let i = 1; i < V; ++i) {
      for (let j = 0; j < E; ++j) {
        let u = this.edge[j].src;
        let v = this.edge[j].dest;
        let weight = this.edge[j].weight;
        if (dist[u] != Infinity && dist[u] + weight < dist[v])
          dist[v] = dist[u] + weight;
      }
    }

    // Step 3: check for negative-weight cycles.  The above
    // step guarantees shortest distances if graph doesn't
    // contain negative weight cycle. If we get a shorter
    //  path, then there is a cycle.
    for (let j = 0; j < E; ++j) {
      let u = this.edge[j].src;
      let v = this.edge[j].dest;
      let weight = this.edge[j].weight;
      if (dist[u] != Infinity && dist[u] + weight < dist[v])
        console.warn("Graph contains negative weight cycle on edge: " + j);
    }
    return dist;
  },
  setEdge(i, src, dest, weight) {
    this.edge[i].src = src;
    this.edge[i].dest = dest;
    this.edge[i].weight = weight;
  }
};

//? tests
// let map = {
//   a: { b: 3, c: 1 },
//   b: { a: 2, c: 1 },
//   c: { a: 1, b: 1 },
//   d: { a: 4 }
// };
// let g = new Graph(map);
// let paths = g.BellmanFord("a");

module.exports = Graph;
