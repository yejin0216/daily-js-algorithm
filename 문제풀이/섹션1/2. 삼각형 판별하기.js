function solution(a, b, c){
    let max = Number.MIN_SAFE_INTEGER;
    const sum = a+b+c;

    if ( max < a ) {
        max = a;
    }
    if ( max < b) {
        max = b;
    }
    if ( max < c ) {
        max = c;
    }

    return (sum-max) > max ? "YES" : "NO";
}

console.log(solution(3, 3, 11))