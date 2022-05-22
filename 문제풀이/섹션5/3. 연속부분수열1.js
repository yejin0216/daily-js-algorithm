function solution(m, arr) {
    let result = 0;
    let lt = 0;
    let sum = 0;

    for ( let rt=0; rt<arr.length; rt++ ) {
        sum += arr[rt];
        if ( sum === m ) result++;

        while ( sum >= m ) {
            sum -= arr[lt++];
            if ( sum === m ) result++;
        }
    }

    return result;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
// let a=[1, 2, 1, 1, 3, 1, 1, 2];
console.log(solution(6, a));
