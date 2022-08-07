function solution(s) {
  // const stack = [];
  //
  // for (const x of s) {
  //   if (x === ")") {
  //     while (stack.pop() !== "(");
  //   } else stack.push(x);
  // }
  //
  // return stack.join("");
  // const temp = []
  // const sArr = [...s];
  // for ( let i=0; i<sArr.length; i++ ) {
  //     if ( sArr[i] !== ")" ) {
  //         temp.push(sArr[i]);
  //     } else {
  //         for ( let j=temp.length-1; j>=0; j-- ) {
  //             if ( temp[j] !== '(' ) {
  //                 temp.pop();
  //             } else {
  //                 temp.pop();
  //                 break;
  //             }
  //         }
  //     }
  // }
  // return temp.join("");
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ")") {
      stack.push(s[i]);
    } else {
      while (stack.pop() !== "(");
    }
  }

  return stack.join("");
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
