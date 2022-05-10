function solution(s){
    let answer="";

    const strs = s.split("");

    for ( const v of strs ) {
        if ( v === v.toUpperCase() ) {
            answer += v.toLowerCase();
        } else {
            answer += v.toUpperCase();
        }
    }

    return answer;
}

console.log(solution("StuDY"));