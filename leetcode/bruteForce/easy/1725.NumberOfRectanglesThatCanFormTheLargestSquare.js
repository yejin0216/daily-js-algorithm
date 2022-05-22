/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    let max = 0;
    const map = new Map();

    for ( let i=0; i<rectangles.length; i++ ) {
        const length = Math.min(rectangles[i][0], rectangles[i][1]);
        max = Math.max(max, length);
        map.set(length, map.has(length) ? map.get(length)+1 : 1);
    }

    return map.get(max);
};

console.log(countGoodRectangles([[5,8],[3,9],[5,12],[16,5]]));
console.log(countGoodRectangles([[2,3],[3,7],[4,3],[3,7]]));
console.log(countGoodRectangles([[4,5],[5,5],[7,7],[7,7]]));