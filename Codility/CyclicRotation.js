/**
 * 첫번째 87% => solution([], 1)인 경우 runtime error 발생
 * @param A
 * @param K
 * @returns {*}
 */
function solution1(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    for ( let i=0; i<K; i++ ) {
        let lastValue = A[A.length-1]; // 마지막 값
        A.pop(); //끝에 자리 제거
        A.unshift(lastValue); // 맨 앞에 끝에 자리 추가
    }

    return A;
}

/**
 * 두번째 100%
 * @param A
 * @param K
 * @returns {*}
 */
function solution2(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if ( A.length > 0 ) {
        for ( let i=0; i<K; i++ ) {
            let lastValue = A[A.length-1]; // 마지막 값
            A.pop(); //끝에 자리 제거
            A.unshift(lastValue); // 맨 앞에 끝에 자리 추가
        }
    } // 복잡도 증가, A.length == K 가 동일한 경우에 불필요하게 loop 태움.

    return A;
}