function solution(s){
    // const arr = s.split("");
    // const result = [];
    // for (const v of arr) {
    //     if ( v === 'A' ) {
    //         result.push('#');
    //     } else {
    //         result.push(v);
    //     }
    // }
    //
    // return result.join('');
    return s.replace(/A/g, '#');
}

let str="BANANA";
console.log(solution(str));