function solution(day, arr){
    let result = 0;
    for ( const item of arr ) {
        if ( item % 10 === day ) {
            result++;
        }
    }
    return result;
}

const arr=[25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
