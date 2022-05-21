function solution(m, product) {
    let max = 1;
    const sorted = product.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));

    for ( let i=0; i<sorted.length; i++ ) {
        let std = sorted[i][0] / 2 + sorted[i][1];
        let sum = 1;
        for ( let j=0; j<sorted.length; j++ ) {
            if ( i !== j ) {
                std += sorted[j][0] + sorted[j][1];
                sum++;
                if ( std >= m ) {
                    max = Math.max(max, sum);
                    break;
                }
            }
        }
    }

    return max;
}

// let arr=[[6, 6], [2, 3], [3, 1], [4, 3], [4, 5], [10, 3]];
let arr = [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));
