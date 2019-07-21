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

> All utilities module have their own readme file.

You can find all the documentation available [here](https://davide97g.github.io/could-be-utils/docs/index.html).

More are coming **soon**:

- graph algorithms:
  - dijkstra with array
  - bellman-ford

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
