function solution(s){
    const arr = s.split("");
    const answer = [];

    for ( let i=0; i<arr.length; i++ ) {
        if ( arr[i] === arr[i].toUpperCase() ) {
            answer.push(arr[i]);
        }
        // const code = s.charCodeAt(i);
        // if ( code >= 65 && code <= 90 ) {
        //     answer.push(arr[i]);
        // }
    }

    return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));