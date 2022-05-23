function solution(s, t){
    let answer=0;

    const arr = [...t];
    const tset = new Set();
    for ( const v of arr ) {
        tset.add(v);
    }

    let prev = tset.has(arr[1]) && tset.has(arr[2]);
    if ( prev && tset.has(arr[0]) ) {
        answer++;
    }

    const sArr = [...s];
    for ( let i=1; i<sArr.length-arr.length+1; i++ ) {
         if ( prev && sArr[i+2] ) answer++;
         prev = tset.has(arr[i]) && tset.has(arr[i+1]);
    }

    return answer;
}

let a="bacaAacba";
let b="abc";
console.log(solution(a, b));