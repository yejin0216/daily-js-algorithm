function solution(s){
    const sArr = [...s];
    const temp = [];

    for ( let i=0; i<sArr.length; i++ ) {
        if ( sArr[i] !== ")" ) {
            temp.push(sArr[i]);
        } else {
            for ( let j=temp.length-1; j>=0; j-- ) {
                if ( temp[j] !== '(' ) {
                    temp.pop();
                } else {
                    temp.pop();
                    break;
                }
            }
        }
    }
    return temp.join("");
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));