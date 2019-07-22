# statistics

## What's inside

- `average` : returns the average of the `data` input
- `variance` : returns the variance of the `data` input

## Usage

```javascript
const statistics = require("could-be-utils").statistics;
// average
const array = [1, 2, 3, 4, 5];
const multi = [[1, 2], [2, 3], [3, 4]];
let avg = statistics.average(array); // 3
let avg_multi = statistics.average(multi); // [2,3]

// variance
const array = [1, 2, 3, 4, 5];
const multi = [[1, 2], [2, 3], [3, 4]];
let vrc = statistics.variance(array); // 1
let vrc_multi = statistics.variance(multi); // [1,1]
```
