/**
 * @param {string} s
 * @return {boolean}
 */

const checkPalindrome = (s, lt, rt) => {
    const str = [...s];
    while ( lt < rt ) {
        if ( str[lt] !== str[rt] ) {
            return false;
        }
        lt++;
        rt--;
    }
    return true;
}

var validPalindrome = function(s) {
    let lt = 0;
    let rt = s.length-1;

    const str = [...s];

    while ( lt < rt ) {
        if ( str[lt] !== str[rt] ) {
            return checkPalindrome(s, lt+1, rt) || checkPalindrome(s, lt, rt-1);
        }
        lt++;
        rt--;
    }

    return true;
};
// console.log(validPalindrome("eedede"));
console.log(validPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"));
// console.log(validPalindrome("abacaa"));
// console.log(validPalindrome("ac"));
// console.log(validPalindrome("abca"));
// console.log(validPalindrome("abacba"));
// console.log(validPalindrome("a"));
// console.log(validPalindrome("aba"));
// console.log(validPalindrome("abaaa"));
// console.log(validPalindrome("aaaba"));
// console.log(validPalindrome("aaacaba"));
// console.log(validPalindrome("acaaa"));
// console.log(validPalindrome("abc"));
