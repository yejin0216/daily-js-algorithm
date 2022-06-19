/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//     const strArr = s.split("");
//     const temp = [];
//
//     for ( let i=0; i<strArr.length; i++ ) {
//         const str = strArr[i];
//         if ( str === '[' || str === '(' || str === '{' ) {
//             temp.push(str);
//         } else {
//             const prev = temp[temp.length-1];
//             if ( !prev ) return false;
//             if ( (str === ']' && prev === '[') || (str === '}' && prev === '{') || (str === ')' && prev === '(') ) {
//                 temp.pop();
//             } else {
//                 temp.push(str);
//             }
//         }
//     }
//
//     return temp.length === 0;
// };

var isValid = function(s) {
    const str = s.split("");
    const temp  = [];

    for ( let i=0; i<str.length; i++ ) {
        const c = str[i];
        if ( c === '(' ) {
            temp.push(')');
        } else if ( c === '{' ) {
            temp.push('}');
        } else if ( c === '[' ) {
            temp.push(']');
        } else if ( temp.length === 0 || temp.pop() !== c ) {
            return false;
        }
    }

    return temp.length === 0;
}

console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))
console.log(isValid("{[]}"))
console.log(isValid(")(){}"))
console.log(isValid("(])"))