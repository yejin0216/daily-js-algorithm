/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const str = s.split("");
    const inxArray = [];

    for ( let i = 0; i < str.length; i++ ) {
        if ( str[i] === '(' ) {
            inxArray.push(i);
        } else if ( str[i] === ')' ) {
            if ( inxArray.length === 0 ) {
                str[i] = '';
            } else {
                inxArray.pop();
            }
        }
    }

    for ( let i = 0; i < inxArray.length; i++ ) {
        str[inxArray[i]] = '';
    }

    return str.join("");
};

console.log(minRemoveToMakeValid("lee(t(c)o)de)"))
console.log(minRemoveToMakeValid("a)b(c)d"))
console.log(minRemoveToMakeValid("))(("))
console.log(minRemoveToMakeValid("()"))
console.log(minRemoveToMakeValid("a"))
console.log(minRemoveToMakeValid("(a(b(c)d)"))