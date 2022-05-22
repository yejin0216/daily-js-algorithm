/**
 * 투포인터스 알고리즘
 * @param arr1
 * @param arr2
 * @returns {*[]}
 */
function solution(arr1, arr2) {
    let p1 = 0;
    let p2 = 0;

    const result = [];

    while ( p1 < arr1.length && p2 < arr2.length ) {
        if ( arr1[p1] < arr2[p2] ) {
            result.push(arr1[p1]);
            p1++;
        } else if ( arr1[p1] > arr2[p2] ) {
            result.push(arr2[p2]);
            p2++;
        } else {
            result.push(arr1[p1]);
            p1++;
            p2++;
        }
    }

    while ( p1 < arr1.length ) {
        result.push(arr1[p1]);
        p1++;
    }

    while ( p2 < arr2.length ) {
        result.push(arr2[p2]);
        p2++;
    }

    return result;
}

let a = [1, 3, 4, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
