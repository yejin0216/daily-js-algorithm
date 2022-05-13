function solution(s){
    const capitalS = s.toUpperCase().replace(/[^A-Z]/g, "");
    return capitalS.split("").reverse().join("") === capitalS ? "YES" : "NO";

    // const capitalSArr = capitalS.split("");
    // for ( let i=0; i<capitalSArr.length/2; i++ ) {
    //     if ( capitalSArr[i] !== capitalSArr[capitalSArr.length-1-i] ) {
    //         return "NO";
    //     }
    // }
    //
    // return "YES";
}

let str="found7,time:study;Yduts;emit,7Dnuof";
console.log(solution(str));