/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const strArr = s.split("");
    const temp = [];

    for ( let i=0; i<strArr.length; i++ ) {
        const str = strArr[i];
        if ( str === '[' || str === '(' || str === '{' ) {
            temp.push(str);
        } else {
            const prev = temp[temp.length-1];
            if ( !prev ) return false;
            if ( (str === ']' && prev === '[') || (str === '}' && prev === '{') || (str === ')' && prev === '(') ) {
                temp.pop();
            } else {
                temp.push(str);
            }
        }
    }

    return temp.length === 0;
};

console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))
console.log(isValid("{[]}"))
console.log(isValid(")(){}"))
console.log(isValid("(])"))