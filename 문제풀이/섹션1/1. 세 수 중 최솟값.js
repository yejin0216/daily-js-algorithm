function solution(a, b, c){
    let min = Number.MAX_SAFE_INTEGER;

    if ( min > a ) {
        min = a;
    }
    if ( min > b) {
        min = b;
    }
    if ( min > c ) {
        min = c;
    }

    return min;
}

console.log(solution(6, 5, 11))