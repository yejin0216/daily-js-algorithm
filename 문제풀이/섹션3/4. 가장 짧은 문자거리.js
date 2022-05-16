function solution(s, t){
    const strArr = s.split("");
    let prevMinIndex = Number.MIN_SAFE_INTEGER;

    const result = [];
    for ( let i=0; i<strArr.length; i++ ) {
        if ( strArr[i] === t ) {
            result.push(0);
            prevMinIndex = i;
        } else {
            let min = 0;
            for ( let j=i+1; j<strArr.length; j++ ) {
                if ( strArr[j] === t ) {
                    min = Math.min(i-prevMinIndex, j-i );
                    break;
                }
            }
            result.push(min);
        }
    }

    return result.join("");
}

let str="teachermode";
console.log(solution(str, 'e'));