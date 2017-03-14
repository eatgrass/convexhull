# convexhull
[![npm version](https://badge.fury.io/js/convexhull.svg)](https://badge.fury.io/js/convexhull)

convex hull 2D algorithm using monotone chain algorithm

# usage

```javascript
const convexhull = require('convexhull');

const points = [
  {
    longitude: 121.409058,
    latitude: 31.191149
  },
  ...
];

const hull = convexhull(points);
```

## Reference
[MonotoneChain](http://geomalgorithms.com/a10-_hull-1.html#Monotone%20Chain)
