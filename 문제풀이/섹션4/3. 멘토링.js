function solution(test) {
    // 모든 경우의 수를 다 확인한다.
    // 멘토 i, 멘티 j
    // 행 x, 렬, y
    let result = 0;
    const studentCount = test[0].length;

    for ( let i=1; i<=studentCount; i++ ) {
        for ( let j=1; j<=studentCount; j++ ) {
            if ( i !== j ) {
                let count = 0;
                for ( let x=0; x<test.length; x++ ) {
                    let jCheck = false; // j가 나오면 true로 바꾼다.
                    for ( let y=0; y<studentCount; y++ ) {
                        if ( test[x][y] === i && !jCheck ) { // i가 j보다 먼저 나오는 경우 count를 센다.
                            count++;
                            break;
                        }
                        if ( test[x][y] === j ) {
                            jCheck = true;
                        }
                    }
                }
                if ( count === 3 ) result++; // count가 행의 갯수와 동일할 때 멘토/멘티가 된다.
            }
        }
    }

    return result;
}
// let arr = [[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
let arr = [[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));
