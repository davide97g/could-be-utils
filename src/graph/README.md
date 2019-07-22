# graph

## What's inside

- `Dijkstra` : creates a graph that can perform dijkstra algorithm for shortest paths
  > Coming soon:
- `BellmanFord` : creates a graph that can perform bellman-ford algorithm for shortest paths

## Usage

```javascript
const graph = require("could-be-utils").graph;
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
