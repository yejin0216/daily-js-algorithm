/**
 * 길이를 재는 문제이다. ㄴ
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const str = [...s];

    let max = 0;
    let sen = "";

    for ( let lt=0; lt<str.length; lt++ ) {
        const value = str[lt];

        if ( sen.indexOf(value) >= 0 ) {
            sen = sen.substring(sen.indexOf(value)+1); // 같은 문자가 있는지 미리 검사 후, 앞에 잘라버린다.
        }

        sen += value; // 뒤에 붙이는 동작은 모두 동일하다.
        max = Math.max(sen.length, max);
    }

    return max;
};

console.log(lengthOfLongestSubstring(" "))
console.log(lengthOfLongestSubstring("as"))
console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("nodejsnodejs"))