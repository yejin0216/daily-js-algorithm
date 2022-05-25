function solution(s) {
   const result = [];
   const sArray = [...s];

   for ( const v of sArray ) {
       if ( v === '(' ) {
           result.push('(');
       } else {
           result.pop();
       }
   }

   return result.length === 0 ? "YES" : "NO";
}

let a = "(()(()))(()";
console.log(solution(a));
