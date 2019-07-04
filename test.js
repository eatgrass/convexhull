import test from 'ava';
import convexhull from './index';
import _ from 'lodash';

test('convex hull ordered points', t => {
    const points = [{
        "latitude": 31.188778,
        "longitude": 121.401588
    }, {
        "latitude": 31.188452,
        "longitude": 121.401802
    }, {
        "latitude": 31.18885,
        "longitude": 121.401833
    }, {
        "latitude": 31.18898,
        "longitude": 121.401917
    }, {
        "latitude": 31.188702,
        "longitude": 121.401947
    }, {
        "latitude": 31.188652,
        "longitude": 121.401978
    }, {
        "latitude": 31.187963,
        "longitude": 121.402122
    }, {
        "latitude": 31.188965,
        "longitude": 121.402122
    }, {
        "latitude": 31.187532,
        "longitude": 121.402451
    }, {
        "latitude": 31.187834,
        "longitude": 121.402466
    }, {
        "latitude": 31.187754,
        "longitude": 121.40271
    }, {
        "latitude": 31.187761,
        "longitude": 121.40271
    }, {
        "latitude": 31.18898,
        "longitude": 121.40271
    }, {
        "latitude": 31.187119,
        "longitude": 121.402725
    }, {
        "latitude": 31.187765,
        "longitude": 121.402725
    }, {
        "latitude": 31.186255,
        "longitude": 121.402954
    }, {
        "latitude": 31.186169,
        "longitude": 121.402985
    }, {
        "latitude": 31.186115,
        "longitude": 121.403
    }, {
        "latitude": 31.186115,
        "longitude": 121.403
    }, {
        "latitude": 31.188963,
        "longitude": 121.403069
    }, {
        "latitude": 31.188992,
        "longitude": 121.403114
    }, {
        "latitude": 31.189125,
        "longitude": 121.403885
    }, {
        "latitude": 31.189125,
        "longitude": 121.403885
    }, {
        "latitude": 31.189125,
        "longitude": 121.403885
    }, {
        "latitude": 31.189219,
        "longitude": 121.4039
    }, {
        "latitude": 31.189398,
        "longitude": 121.403915
    }, {
        "latitude": 31.189783,
        "longitude": 121.403931
    }, {
        "latitude": 31.191666,
        "longitude": 121.404045
    }, {
        "latitude": 31.191662,
        "longitude": 121.404648
    }, {
        "latitude": 31.191547,
        "longitude": 121.406647
    }, {
        "latitude": 31.191526,
        "longitude": 121.407135
    }, {
        "latitude": 31.188787,
        "longitude": 121.407547
    }, {
        "latitude": 31.191498,
        "longitude": 121.407646
    }, {
        "latitude": 31.188774,
        "longitude": 121.407936
    }, {
        "latitude": 31.18877,
        "longitude": 121.408424
    }, {
        "latitude": 31.188763,
        "longitude": 121.408638
    }, {
        "latitude": 31.191458,
        "longitude": 121.40873
    }, {
        "latitude": 31.191376,
        "longitude": 121.408943
    }, {
        "latitude": 31.191038,
        "longitude": 121.409042
    }, {
        "latitude": 31.191038,
        "longitude": 121.409042
    }, {
        "latitude": 31.191038,
        "longitude": 121.409042
    }, {
        "latitude": 31.191042,
        "longitude": 121.409042
    }, {
        "latitude": 31.191271,
        "longitude": 121.409042
    }, {
        "latitude": 31.191149,
        "longitude": 121.409058
    }];

    const hull = [{
        "latitude": 31.188778,
        "longitude": 121.401588
    }, {
        "latitude": 31.186115,
        "longitude": 121.403
    }, {
        "latitude": 31.188763,
        "longitude": 121.408638
    }, {
        "latitude": 31.191038,
        "longitude": 121.409042
    }, {
        "latitude": 31.191149,
        "longitude": 121.409058
    }, {
        "latitude": 31.191271,
        "longitude": 121.409042
    }, {
        "latitude": 31.191376,
        "longitude": 121.408943
    }, {
        "latitude": 31.191458,
        "longitude": 121.40873
    }, {
        "latitude": 31.191662,
        "longitude": 121.404648
    }, {
        "latitude": 31.191666,
        "longitude": 121.404045
    }, {
        "latitude": 31.18898,
        "longitude": 121.401917
    }];
    t.deepEqual(convexhull()(points), hull);
});

test('convex hull disordered points', t => {
    const points = [
    {
      "latitude": 31.187765,
      "longitude": 121.402725
    },
    {
      "latitude": 31.187761,
      "longitude": 121.40271
    },
    {
      "latitude": 31.187754,
      "longitude": 121.40271
    },
    {
      "latitude": 31.187834,
      "longitude": 121.402466
    },
    {
      "latitude": 31.188652,
      "longitude": 121.401978
    },
    {
      "latitude": 31.188702,
      "longitude": 121.401947
    },
    {
      "latitude": 31.18885,
      "longitude": 121.401833
    },
    {
      "latitude": 31.18898,
      "longitude": 121.401917
    },
    {
      "latitude": 31.18898,
      "longitude": 121.40271
    },
    {
      "latitude": 31.188787,
      "longitude": 121.407547
    },
    {
      "latitude": 31.188774,
      "longitude": 121.407936
    },
    {
      "latitude": 31.18877,
      "longitude": 121.408424
    },
    {
      "latitude": 31.188763,
      "longitude": 121.408638
    },
    {
      "latitude": 31.191042,
      "longitude": 121.409042
    },
    {
      "latitude": 31.191271,
      "longitude": 121.409042
    },
    {
      "latitude": 31.191458,
      "longitude": 121.40873
    },
    {
      "latitude": 31.191662,
      "longitude": 121.404648
    },
    {
      "latitude": 31.189783,
      "longitude": 121.403931
    },
    {
      "latitude": 31.189398,
      "longitude": 121.403915
    },
    {
      "latitude": 31.191038,
      "longitude": 121.409042
    },
    {
      "latitude": 31.191038,
      "longitude": 121.409042
    },
    {
      "latitude": 31.191038,
      "longitude": 121.409042
    },
    {
      "latitude": 31.191149,
      "longitude": 121.409058
    },
    {
      "latitude": 31.191376,
      "longitude": 121.408943
    },
    {
      "latitude": 31.191498,
      "longitude": 121.407646
    },
    {
      "latitude": 31.191526,
      "longitude": 121.407135
    },
    {
      "latitude": 31.191547,
      "longitude": 121.406647
    },
    {
      "latitude": 31.191666,
      "longitude": 121.404045
    },
    {
      "latitude": 31.189219,
      "longitude": 121.4039
    },
    {
      "latitude": 31.189125,
      "longitude": 121.403885
    },
    {
      "latitude": 31.189125,
      "longitude": 121.403885
    },
    {
      "latitude": 31.189125,
      "longitude": 121.403885
    },
    {
      "latitude": 31.188992,
      "longitude": 121.403114
    },
    {
      "latitude": 31.188963,
      "longitude": 121.403069
    },
    {
      "latitude": 31.188965,
      "longitude": 121.402122
    },
    {
      "latitude": 31.188778,
      "longitude": 121.401588
    },
    {
      "latitude": 31.188452,
      "longitude": 121.401802
    },
    {
      "latitude": 31.187963,
      "longitude": 121.402122
    },
    {
      "latitude": 31.187532,
      "longitude": 121.402451
    },
    {
      "latitude": 31.187119,
      "longitude": 121.402725
    },
    {
      "latitude": 31.186255,
      "longitude": 121.402954
    },
    {
      "latitude": 31.186169,
      "longitude": 121.402985
    },
    {
      "latitude": 31.186115,
      "longitude": 121.403
    },
    {
      "latitude": 31.186115,
      "longitude": 121.403
    }
  ];

  const hull = [{
        "latitude": 31.188778,
        "longitude": 121.401588
    }, {
        "latitude": 31.186115,
        "longitude": 121.403
    }, {
        "latitude": 31.188763,
        "longitude": 121.408638
    }, {
        "latitude": 31.191038,
        "longitude": 121.409042
    }, {
        "latitude": 31.191149,
        "longitude": 121.409058
    }, {
        "latitude": 31.191271,
        "longitude": 121.409042
    }, {
        "latitude": 31.191376,
        "longitude": 121.408943
    }, {
        "latitude": 31.191458,
        "longitude": 121.40873
    }, {
        "latitude": 31.191662,
        "longitude": 121.404648
    }, {
        "latitude": 31.191666,
        "longitude": 121.404045
    }, {
        "latitude": 31.18898,
        "longitude": 121.401917
    }];

    t.deepEqual(convexhull()(points,true), hull);
});


test('convex hull disordered points with custom keys', t => {
  const points = [
    {
      "y": 31.187765,
      "x": 121.402725
    },
    {
      "y": 31.187761,
      "x": 121.40271
    },
    {
      "y": 31.187754,
      "x": 121.40271
    },
    {
      "y": 31.187834,
      "x": 121.402466
    },
    {
      "y": 31.188652,
      "x": 121.401978
    },
    {
      "y": 31.188702,
      "x": 121.401947
    },
    {
      "y": 31.18885,
      "x": 121.401833
    },
    {
      "y": 31.18898,
      "x": 121.401917
    },
    {
      "y": 31.18898,
      "x": 121.40271
    },
    {
      "y": 31.188787,
      "x": 121.407547
    },
    {
      "y": 31.188774,
      "x": 121.407936
    },
    {
      "y": 31.18877,
      "x": 121.408424
    },
    {
      "y": 31.188763,
      "x": 121.408638
    },
    {
      "y": 31.191042,
      "x": 121.409042
    },
    {
      "y": 31.191271,
      "x": 121.409042
    },
    {
      "y": 31.191458,
      "x": 121.40873
    },
    {
      "y": 31.191662,
      "x": 121.404648
    },
    {
      "y": 31.189783,
      "x": 121.403931
    },
    {
      "y": 31.189398,
      "x": 121.403915
    },
    {
      "y": 31.191038,
      "x": 121.409042
    },
    {
      "y": 31.191038,
      "x": 121.409042
    },
    {
      "y": 31.191038,
      "x": 121.409042
    },
    {
      "y": 31.191149,
      "x": 121.409058
    },
    {
      "y": 31.191376,
      "x": 121.408943
    },
    {
      "y": 31.191498,
      "x": 121.407646
    },
    {
      "y": 31.191526,
      "x": 121.407135
    },
    {
      "y": 31.191547,
      "x": 121.406647
    },
    {
      "y": 31.191666,
      "x": 121.404045
    },
    {
      "y": 31.189219,
      "x": 121.4039
    },
    {
      "y": 31.189125,
      "x": 121.403885
    },
    {
      "y": 31.189125,
      "x": 121.403885
    },
    {
      "y": 31.189125,
      "x": 121.403885
    },
    {
      "y": 31.188992,
      "x": 121.403114
    },
    {
      "y": 31.188963,
      "x": 121.403069
    },
    {
      "y": 31.188965,
      "x": 121.402122
    },
    {
      "y": 31.188778,
      "x": 121.401588
    },
    {
      "y": 31.188452,
      "x": 121.401802
    },
    {
      "y": 31.187963,
      "x": 121.402122
    },
    {
      "y": 31.187532,
      "x": 121.402451
    },
    {
      "y": 31.187119,
      "x": 121.402725
    },
    {
      "y": 31.186255,
      "x": 121.402954
    },
    {
      "y": 31.186169,
      "x": 121.402985
    },
    {
      "y": 31.186115,
      "x": 121.403
    },
    {
      "y": 31.186115,
      "x": 121.403
    }
  ];

  const hull = [{
    "y": 31.188778,
    "x": 121.401588
  }, {
    "y": 31.186115,
    "x": 121.403
  }, {
    "y": 31.188763,
    "x": 121.408638
  }, {
    "y": 31.191038,
    "x": 121.409042
  }, {
    "y": 31.191149,
    "x": 121.409058
  }, {
    "y": 31.191271,
    "x": 121.409042
  }, {
    "y": 31.191376,
    "x": 121.408943
  }, {
    "y": 31.191458,
    "x": 121.40873
  }, {
    "y": 31.191662,
    "x": 121.404648
  }, {
    "y": 31.191666,
    "x": 121.404045
  }, {
    "y": 31.18898,
    "x": 121.401917
  }];

  t.deepEqual(convexhull({x: 'x', y: 'y'})(points,true), hull);
});