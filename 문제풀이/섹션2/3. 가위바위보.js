function solution(a, b){
    const result = [];
    for ( let i=0; i<a.length; i++ ) {
        if  (a[i] === 1 && b[i] === 3) {
            result.push("A");
        } else if  (a[i] === 3 && b[i] === 1) {
            result.push("B");
        } else if  (a[i] === b[i]) {
            result.push("D");
        } else {
            if ( a[i] < b[i] ) result.push("B");
            else result.push("A");
        }
    }
    return result.join("");
}

let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(a, b));