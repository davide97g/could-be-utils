# map

## What's inside

- `arrayToMap` : Converts a matrix into a DAG graph as a map

## Usage

```javascript
//require the module
const map = require("could-be-utils").map;
//create an array to be converted
let array = [[0, 1, 2], [1, 1, 3], [2, 3, 2]];
//convert
let converted_map = map.arrayToMap(array);
//your results
console.table(converted_map);
┌─────────┬────┬────┬────┬────┬────┬────┬────┬────┐
│ (index) │ 10 │ 11 │ 12 │ 20 │ 21 │ 22 │ 01 │ 02 │
├─────────┼────┼────┼────┼────┼────┼────┼────┼────┤
│   10    │    │ 1  │    │ 2  │    │    │    │    │
│   11    │    │    │ 3  │    │ 3  │    │    │    │
│   12    │    │    │    │    │    │ 2  │    │    │
│   20    │    │    │    │    │ 3  │    │    │    │
│   21    │    │    │    │    │    │ 2  │    │    │
│   22    │    │    │    │    │    │    │    │    │
│   00    │ 1  │    │    │    │    │    │ 1  │    │
│   01    │    │ 1  │    │    │    │    │    │ 2  │
│   02    │    │    │ 3  │    │    │    │    │    │
└─────────┴────┴────┴────┴────┴────┴────┴────┴────┘
```
