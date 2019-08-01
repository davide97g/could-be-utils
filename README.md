![GitHub issues](https://img.shields.io/github/issues/davide97g/could-be-utils)
![GitHub](https://img.shields.io/github/license/davide97g/could-be-utils)
![npm](https://img.shields.io/npm/v/could-be-utils)
![npm](https://img.shields.io/npm/dw/could-be-utils)

# could-be-utils

Library containing utility functions in javascript.

> ### _"think twice, code once"_ 💡

Don't waste time writing the same utility functions **everytime**.

## What's inside

List of different types of utilities:

- array
- distances
- random
- statistics
- graph
  - dijkstra with maps
  - bellman-ford with maps 🔥NEW🔥

> All utilities module have their own readme file.

You can find all the documentation available [here](https://davide97g.github.io/could-be-utils/).

More are coming **soon**:

- graph algorithms:
  - dijkstra with array
  - bellman-ford with array

## Usage

```javascript
//import the modules
const utils = require("could-be-utils");

//use the module you want
// 1° way
//import and isolate the random module
const random = utils.random;
let random_integer_value = random.randi(0, 10);
// 2° way
// scan through the utils variable
let random_integer_value = utils.random.randi(0, 10);

//import the statistics module
const statistics = utils.statistics;
let avg = statistics.avg([1, 2, 3, 4, 5]); // avg = 3
```
