# random

## What's inside

- `randi` : generate a random integer between `a` and `b` (`b` excluded)
- `randf` : generate a random float between `a` and `b` (`b` excluded)

## Usage

```javascript
const random = require("could-be-utils").random;

//random integer
let ri = random.randi(10, 20); // random value between 10 and 19 included

//random float
let rf = random.randf(10, 20); // random value between 10 and 20 excluded
```
