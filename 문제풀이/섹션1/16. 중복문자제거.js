function solution(s){
    let result = '';

    for ( let i=0; i < s.length; i++ ) {
        if ( result.indexOf(s[i]) < 0 ) {
            result += s[i];
        }
    }

    return result;
}
console.log(solution("ksekkset"));