function solution(s){
    const isEven = s.length%2 === 0;

    if ( isEven ) {
        return [s[s.length/2], s[(s.length/2)-1]].join('');
    } else {
        return s[Math.floor(s.length/2)]
    }
}
console.log(solution("good"));
console.log(solution("study"));