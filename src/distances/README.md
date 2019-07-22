# distances

## What's inside

- `Distances` : function that wraps all distances functions around.

Distances calculation available:

- minkowski (with arbitrary degree)
- chebyshev
- mahalanobis

## Usage

```javascript
const Distances = require("could-be-utils").distances;
let distances = new Distances();

//two points
let point1 = [1, 2];
let point2 = [2, 3];

//minkowski
let d = distances.minkowski(point1, point2);
//change the degree
distances.setMinkowskiDegree(3);
let d = distances.minkowski(point1, point2);

//chebyshev
let d = distances.chebyshev(point1, point2);

//mahalanobis
//first need to set the dataset
let data = [[1, 2], [2, 3], [3, 4], [4, 5]];
distances.setDataSet(data);
let d = distances.mahalanobis(point1, point2);

//set default distance function
distances.setDefault("minkowski"); // other values: "chebyshev", "mahalanobis"

//get distance of default function
let d = distances.of(point1, point2); //returns the value from the default distance function
```
