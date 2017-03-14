# convexhull
[![npm version](https://badge.fury.io/js/convexhull.svg)](https://badge.fury.io/js/convexhull)

convex hull 2D algorithm using monotone chain algorithm

## usage

```javascript
const convexhull = require('convexhull')(/*options*/{x:'lng', y: 'lat'});

const points = [
  {
    lng: 121.409058,
    lat: 31.191149
  },
  ...
];

const hull = convexhull(points);
```

## Options

| option        | desc           | default     |
| ------------- |:--------------:| -----------:|
| x             | property key x | 'longitude' |
| y             | property key y | 'latitude'  |

## Reference
[MonotoneChain](http://geomalgorithms.com/a10-_hull-1.html#Monotone%20Chain)
