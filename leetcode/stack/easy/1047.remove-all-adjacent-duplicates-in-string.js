/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const str = s.split("");
    const stack = [str[0]];

    // Pointer, Stack 주의 깊게 생각하기
    for ( let i=1; i<str.length; i++ ) {
        if ( stack[stack.length-1] === str[i] ) {
            stack.pop();
        } else {
            stack.push(str[i]);
        }
    }

    return stack.join("");
};

console.log(removeDuplicates("abbaca"))
console.log(removeDuplicates("azxxzy"))