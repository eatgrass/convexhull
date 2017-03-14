module.exports = (points) => {

    let bot = 0;
    let top = -1;
    let hull = [];

    let minMin = 0;

    let xMin = points[0].longitude;
    let i = 1;
    for(;i < points.length; i++) {
        if(points[i].longitude !== xMin) {
            break;
        }
    }

    minMax = i - 1;
    if(minMax === points.length - 1) {
        hull[++top] = points[minMin];
        if(points[minMax].latitude !== points[minMin].latitude)
            hull[++top] = points[minMax];
        hull[++top] = points[minMin];
        return hull;
    }

    let maxMin, maxMax = points.length - 1;
    let xMax = points[points.length - 1].longitude;

    for(i = points.length -2; i >= 0; i--) {
        if(points[i].longitude !== xMax) {
            break;
        }
    }

    maxMin = i + 1;

    hull[++top] = points[minMin];
    i = minMax;

    while (++i <= maxMin) {
        if (isLeft(points[minMin],points[maxMin], points[i]) >=0 && i < maxMin) {
            continue;
        }

        while (top > 0) {
            if (isLeft(hull[top - 1], hull[top], points[i]) > 0) {
                break;
            } else {
                top--;
            }
        }

        hull[++top] = points[i];
    }

    if (maxMax !== maxMin) {
        hull[++top] = points[maxMax];
    }

    bot = top;
    i = maxMin;

    while (--i >= minMax) {
        if (isLeft(points[maxMax], points[minMax], points[i]) >= 0 && i > minMax) {
            continue;
        }

        while (top > bot) {
            if (isLeft(hull[top - 1], hull[top], points[i]) > 0) {
                break;
            } else {
                top--;
            }
        }

        if (points[i].longitude === hull[0].longitude && points[i].latitude === hull[0].latitude) {
                return hull;
        }
        
        hull[++top] = points[i];

    }

    if (minMax !== minMin) {
        hull[++top] = points[minMin];
    }

    return hull;
}

const isLeft = (p0, p1 , p2) => {
    return (p1.longitude - p0.longitude) * (p2.latitude - p0.latitude) - (p2.longitude - p0.longitude) * (p1.latitude - p0.latitude);
}

function sortPointX(a, b) {
    return a.longitude - b.longitude;
}
function sortPointY(a, b) {
    return a.latitude - b.latitude;
}