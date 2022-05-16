
function solution(s){
    const sArray = s.split("");

    let result = "";
    let prevStr = "";
    let prevCount = 1;

    for ( const str of sArray ) {
        if ( str !== prevStr ) {
            result += ( prevCount > 1 ? prevCount.toString() : "" ) + str;
            prevCount = 1;
        } else {
            prevCount++;
        }
        prevStr = str;
    }

    return result;
}

let str="KKHSSSSSSSE";
console.log(solution(str));