function solution(arr1, arr2) {
    const a1 = arr1.sort((a, b) => a-b);
    const a2 = arr2.sort((a, b) => a-b);

    let p1 = 0;
    let p2 = 0;

    const result = [];

    while ( p1 < a1.length && p2 < a2.length ) {
        if ( a1[p1] === a2[p2] ) {
            result.push(a1[p1]);
            p1++;
            p2++;
        } else if ( a1[p1] > a2[p2] ) {
            while ( a2[p2] < a1[p1] ) {
                p2++;
            }
        } else {
            while ( a2[p2] > a1[p1] ) {
                p1++;
            }
        }
    }

    return result;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
