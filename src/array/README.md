# array

## What's inside

- `zeros` : creates a new array with `n` zeros
- `copyArray` : creates a copy of the `input` array
- `arrayWith` : creates a new array of `n` elements, all equal to `value`
- `objectToArray` : converts an array of object into an array of arrays
- `arrayToObject` : converts an array of arrays into an array of objects, given a list of ordered keys
- `extractKeys` : extracts the keys from an objects and put them inside an array as strings

## Usage

```javascript
const array = require("could-be-utils").array;

//generate new array of 50 zeros
let z = array.zeros(50); // [0,0,0,0,0,...,0]

//generate a copy of an array
let original = [1, 2, 3, 4, 5];
let copied = array.copyArray(original); // [1,2,3,4,5]

//generate a new array with the selected value
let v = array.arrayWith("test", 4); // ["test","test","test","test"]

// object to array and array to object conversion
const objectArray = [
  { x: 1, y: 1 },
  { x: 2, y: 2 },
  { x: 3, y: 4 },
  { x: 4, y: 8 },
  { x: 5, y: 16 }
];

let v1 = array.objectToArray(objectArray);
// v1 = [[1,1],[2,2],[3,4],[4,8],[5,16]]
let v2 = array.arrayToObject(v1, ["x", "y"]);
/* v2 = [{ x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 4 },
    { x: 4, y: 8 },
    { x: 5, y: 16 }]
*/

//key extraction
let k1 = array.extractKeys({ x: 1, y: 2 }); // ["x","y"]
let k2 = array.extractKeys({ x: 1, y: 2, z: 3 }); // ["x","y","z"]
```
