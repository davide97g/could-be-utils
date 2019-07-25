# random

## What's inside

- `randi` : generate a random integer between `a` and `b` (`b` excluded)
- `randf` : generate a random float between `a` and `b` (`b` excluded)
- `randiArray` : generate an array of `N` elements filled with random integer between `a` and `b`
- `randfArray` : generate an array of `N` elements filled with random float between `a` and `b`

## Usage

```javascript
const random = require("could-be-utils").random;

//random integer
let ri = random.randi(10, 20); // random value between 10 and 19 included

//random float
let rf = random.randf(10, 20); // random value between 10 and 20 excluded

//random array integer
let ria = random.randiArray(10, 20, 10); // array with 10 random integer values between 10 and 20 excluded

//random array float
let rfa = random.randfArray(10, 20, 10); // array with 10 random float values between 10 and 20 excluded
```
