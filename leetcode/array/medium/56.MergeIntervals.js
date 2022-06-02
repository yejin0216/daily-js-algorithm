/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const newIntervals = intervals.sort((a, b) => a[0] - b[0]);
    const result = [newIntervals[0]];
    let i = 1;

    while ( i < newIntervals.length ) {
        const array = newIntervals[i];
        if ( array[0] <= result[result.length-1][1] ) {
            result[result.length-1] = [result[result.length-1][0], result[result.length-1][1] > array[1] ? result[result.length-1][1] : array[1]];
        } else {
            result.push(array)
        }
        i++;
    }

    return result;
};
// console.log(merge([[1,3],[2,6],[4,10]]));
// console.log(merge([[1,3],[2,6],[4,10],[15,18]]))
// console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
// console.log(merge([[1,4],[4,5]]))
// console.log(merge([[1,3],[2,6],[8,10],[15,18],[20,23],[22,25],[20,25]]))
// console.log(merge([[0,1],[1,2]]))
// console.log(merge([[1,3]]))
// console.log(merge([[1,4],[3,5],[6,7]]))
// console.log(merge([[1,4],[5,6]]))
console.log(merge(([[1,4],[0,4]]))) // [0, 4]
console.log(merge([[1,4],[2,3]])) // [1, 4]