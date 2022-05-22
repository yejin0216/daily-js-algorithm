function solution(m, arr) {
    let lt=0;
    let result = 0;
    let sum = 0;

    for ( let rt=0; rt<arr.length; rt++ ) {
        sum += arr[rt];
        if ( sum <= m ) result++;
        while (sum >= m && rt-lt > 1) {
            sum -= arr[lt++];
            if ( sum <= m ) result++; // 이게 왜 4개가 나오지? // 1자리수와 중복으로 카운팅되고 있다.
        }
    }

    return result + arr.length -1;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
