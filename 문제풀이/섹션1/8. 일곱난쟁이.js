function solution(arr){
    let sum = 0;
    for ( const v of arr ) {
        sum += v;
    }

    let a = 0;
    let b = 0;
    for ( let i=0; i<9; i++ ) {
        let restSum = sum - arr[i];
        for ( let j=i+1; j<9; j++ ) {
            if ( restSum - arr[j] === 100 ) {
                a = i;
                b = j;
            }
        }
    }

    let result = [];
    for ( let i=0; i<9; i++) {
        if ( i !== a && i !== b ) {
            result.push(arr[i]);
        }
    }

    return result;
}
const arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
