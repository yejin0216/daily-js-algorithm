function solution(k, arr) {
    // 슬라이딩 윈도우는 0(N)이다.
    let sum = 0;
    for ( let i=0; i<k; i++ ) {
        sum += arr[i];
    }
    let max = sum;
    for ( let i=1; i<arr.length-k+1; i++ ) {
        sum -= arr[i-1];
        sum += arr[i+k-1];
        max = Math.max(max, sum);
    }
    return max;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
