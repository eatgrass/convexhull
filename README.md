# convexhull

[![npm version](https://badge.fury.io/js/convexhull.svg)](https://badge.fury.io/js/convexhull)
[![Build Status](https://travis-ci.org/eatgrass/convexhull.svg?branch=master)](https://travis-ci.org/eatgrass/convexhull)

convex hull 2D algorithm using monotone chain algorithm

## Usage

```javascript
const convexhull = require('convexhull')(/*options*/{x: 'lng', y: 'lat'});

const points = [
  {
    lng: 121.409058,
    lat: 31.191149
  },
  ...
];

let hull = convexhull(points);

// for unsorted points
hull = convexhull(points, true);

```

## Options

| option        | desc           | default     |
| ------------- |:--------------:| ------------|
| x             | property key x | 'longitude' |
| y             | property key y | 'latitude'  |

## Sample

![](http://on3tdwbvo.bkt.clouddn.com/convexhull.jpeg)


## Reference
[MonotoneChain](http://geomalgorithms.com/a10-_hull-1.html#Monotone%20Chain)
