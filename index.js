
module.exports = (options) =>{
    options = options || {};

    const x = options.x || 'longitude';
    const y = options.y || 'latitude';

    const isLeft = (p0, p1 , p2) => {
        return (p1[x] - p0[x]) * (p2[y] - p0[y]) - (p2[x] - p0[x]) * (p1[y] - p0[y]);
    }

    const sortByX = (a, b) => {
        return a[x] - b[x];
    }

    const sortByY = (a, b) => {
        return a[y] - b[y];
    }


    return (points, sort) => {

        if(!(points instanceof Array)) {
            throw new TypeError('points must be an array');
        }

        if(points.length < 2) {
            return [];
        }

        if(sort) {
            points.sort(sortByX);
            points.sort(sortByY);
        }

        let bot = 0;
        let top = -1;
        let hull = [];

        let minMin = 0;

        let xMin = points[0][x];
        let i = 1;
        for(;i < points.length; i++) {
            if(points[i][x] !== xMin) {
                break;
            }
        }

        minMax = i - 1;
        if(minMax === points.length - 1) {
            hull[++top] = points[minMin];
            if(points[minMax][y] !== points[minMin][y])
                hull[++top] = points[minMax];
            hull[++top] = points[minMin];
            return hull;
        }

        let maxMin, maxMax = points.length - 1;
        let xMax = points[points.length - 1][x];

        for(i = points.length -2; i >= 0; i--) {
            if(points[i][x] !== xMax) {
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

            if (points[i][x] === hull[0][x] && points[i][y] === hull[0][y]) {
                    return hull;
            }
            
            hull[++top] = points[i];

        }

        if (minMax !== minMin) {
            hull[++top] = points[minMin];
        }

        return hull;
    }
}
    

