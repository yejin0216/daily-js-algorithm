// function solution(n, arr) {
//     let max = Number.MIN_SAFE_INTEGER;
//     let result = 0;
//
//     for ( let i=0; i<n; i++ ) {
//         const str = (arr[i]).toString().split("");
//         let sum = 0;
//         for ( const char of str ) {
//             sum += parseInt(char);
//         }
//
//         if ( Math.max(max, sum) === sum ) {
//             result = arr[i];
//             max = sum;
//         }
//     }
//
//     return result;
// }
//
// let arr = [128, 460, 603, 40, 521, 137, 123];
// console.log(solution(7, arr));


function solution(n, arr) {
    let result = 0;
    let max = Number.MIN_SAFE_INTEGER;

    for ( let i=0; i<n; i++ ) {
        let sum = 0;
        let base = arr[i];
        for ( let j=arr[i].toString().length-1; j>=0; j-- ) {
            sum += Math.floor(base / (10 ** j) );
            base = base - (Math.floor(base / (10 ** j)) * (10**j));
        }
        if ( Math.max(max, sum) === sum ) {
            max = sum;
            result = arr[i];
        }
    }

    return result;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
