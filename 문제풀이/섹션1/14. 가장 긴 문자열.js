function solution(s){
    let max = Number.MIN_SAFE_INTEGER;
    let result = '';

    for ( const v of s ) {
        if ( max < v.length ) {
            max = v.length;
            result = v;
        }
    }

    return result;
}
let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));