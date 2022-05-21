function solution(n, k, card) {
    const set = new Set();

    for ( let i=0; i<n-2; i++ ) {
        for ( let j=i+1; j<n-1; j++ ) {
            for ( let l=j+1; l<n; l++ ) {
                set.add(card[i]+card[j]+card[l]);
            }
        }
    }

    return k-1 >= 0 && k-1 < arr.length ? Array.from(set).sort((a, b) => b-a)[k-1] : -1;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
