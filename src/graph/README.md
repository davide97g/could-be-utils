# graph

## What's inside

- `Dijkstra` : creates a graph that can perform dijkstra algorithm for shortest paths from a map
- `BellmanFord` : creates a graph that can perform bellman-ford algorithm for shortest paths from a map
  > Coming soon:
- `ShortestPath` : dynamic programming version of dijkstra algorithm for shortest path from a matrix

## Usage

### Import Graph module

```javascript
const graph = require("could-be-utils").graph;
```

### Dijkstra

```javascript
//create a map
let map = {
  a: { b: 3, c: 1 },
  b: { a: 2, c: 1 },
  c: { a: 4, b: 1 }
};
//new dijkstra graph from map
let g = new graph.Dijkstra(map);
//examples of shortest path calls
g.findShortestPath("a", "b"); // => ['a', 'c', 'b']
g.findShortestPath("a", "c"); // => ['a', 'c']
g.findShortestPath("b", "a"); // => ['b', 'a']
g.findShortestPath("b", "c", "b"); // => ['b', 'c', 'b']
g.findShortestPath("c", "a", "b"); // => ['c', 'b', 'a', 'c', 'b']
g.findShortestPath("c", "b", "a"); // => ['c', 'b', 'a']
```

### BellmanFord

```javascript
//create a map
let map = {
  a: { b: 3, c: 1 },
  b: { a: 2, c: 1 },
  c: { a: 1, b: 1 },
  d: { a: 4 }
};
//new bellmanford graph from map
let g = new graph.BellmanFord(map);
//get the shortest paths from d to every other node
let paths = g.BellmanFord("d");
console.table(paths);
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    a    │   4    │
│    b    │   6    │
│    c    │   5    │
│    d    │   0    │
└─────────┴────────┘
```
