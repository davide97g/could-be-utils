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
function convertToString(number) {
  let s = number.toString();
  let res = "";
  for (let i = 0; i < s.length; i++) res += numberToLetter(parseInt(s[i]));
  return res;
}
let conversion = convertToString(number);

const Dijkstra = require("./dijkstra");

// let map = {
//   a: { b: 3, c: 1 },
//   b: { a: 2, c: 1 },
//   c: { a: 4, b: 1 }
// };
// let g = new Dijkstra(map);
// console.info(g.findShortestPath("a", "b")); // => ['a', 'c', 'b']
// console.info(g.findShortestPath("a", "c")); // => ['a', 'c']
// console.info(g.findShortestPath("b", "a")); // => ['b', 'a']
// console.info(g.findShortestPath("b", "c", "b")); // => ['b', 'c', 'b']
// console.info(g.findShortestPath("c", "a", "b")); // => ['c', 'b', 'a', 'c', 'b']
// console.info(g.findShortestPath("c", "b", "a")); // => ['c', 'b', 'a']

module.exports = {
  Dijkstra: Dijkstra
};
