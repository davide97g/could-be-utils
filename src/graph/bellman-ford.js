const array = require("../array/array");
// An object to represent a weighted edge in graph
const Edge = () => {
  return {
    src: 0,
    dest: 0,
    weight: 0
  };
};

// Creates a graph with V vertices and E edges
const Graph = function(v, e) {
  this.V = v;
  this.E = e;
  this.edge = new Array(e);
  for (let i = 0; i < e; ++i) this.edge[i] = Edge();
};

Graph.prototype = {
  // The main function that finds shortest distances from src
  // to all other vertices using Bellman-Ford algorithm.  The
  // function also detects negative weight cycle
  BellmanFord: function(src) {
    let graph = this;
    let V = graph.V;
    let E = graph.E;
    let dist = array.arrayWith(Infinity, V);
    dist[src] = 0;

    // Step 2: Relax all edges |V| - 1 times. A simple
    // shortest path from src to any other vertex can
    // have at-most |V| - 1 edges
    for (let i = 1; i < V; ++i) {
      for (let j = 0; j < E; ++j) {
        let u = graph.edge[j].src;
        let v = graph.edge[j].dest;
        let weight = graph.edge[j].weight;
        if (dist[u] != Infinity && dist[u] + weight < dist[v])
          dist[v] = dist[u] + weight;
      }
    }

    // Step 3: check for negative-weight cycles.  The above
    // step guarantees shortest distances if graph doesn't
    // contain negative weight cycle. If we get a shorter
    //  path, then there is a cycle.
    for (let j = 0; j < E; ++j) {
      let u = graph.edge[j].src;
      let v = graph.edge[j].dest;
      let weight = graph.edge[j].weight;
      if (dist[u] != Infinity && dist[u] + weight < dist[v])
        console.info("Graph contains negative weight cycle");
    }
    console.table(dist);
  }
};

// let V = 5; // Number of vertices in graph
// let E = 8; // Number of edges in graph

// let graph = new Graph(V, E);

// graph.edge[0].src = 0;
// graph.edge[0].dest = 1;
// graph.edge[0].weight = -1;

// graph.edge[1].src = 0;
// graph.edge[1].dest = 2;
// graph.edge[1].weight = 4;

// graph.edge[2].src = 1;
// graph.edge[2].dest = 2;
// graph.edge[2].weight = 3;

// graph.edge[3].src = 1;
// graph.edge[3].dest = 3;
// graph.edge[3].weight = 2;

// graph.edge[4].src = 1;
// graph.edge[4].dest = 4;
// graph.edge[4].weight = 2;

// graph.edge[5].src = 3;
// graph.edge[5].dest = 2;
// graph.edge[5].weight = 5;

// graph.edge[6].src = 3;
// graph.edge[6].dest = 1;
// graph.edge[6].weight = 1;

// graph.edge[7].src = 4;
// graph.edge[7].dest = 3;
// graph.edge[7].weight = -3;

// graph.BellmanFord(0);
