function solution(s){
    // const str = s.toUpperCase();
    // let strReverse = "";
    //
    // for ( let i=str.length-1; i>=0; i-- ) {
    //     strReverse += str[i];
    // }
    //
    // return strReverse === str ? "YES" : "NO";

    const str = s.toUpperCase().split("");
    for ( let i = 0, j = str.length-1; i<str.length; i++, j-- ) {
        if ( i === j || i > j ) break;
        if ( str[i] !== str[j] ) {
            return "NO";
        }
    }

    return "YES";
}

let str="goooG";
console.log(solution(str));