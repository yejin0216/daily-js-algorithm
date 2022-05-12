function solution(arr){
    let result = 0;
    let weight = 0;

    for ( const v of arr ) {
        if ( v === 0 ) {
            weight = 0;
        } else {
            weight++;
            result += v*weight;
        }
    }

    return result;
}

let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));