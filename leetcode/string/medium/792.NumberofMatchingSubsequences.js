/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  let result = 0;

  for (const word of words) {
    let prevIndex = -1;
    let match = 0;
    for (const v of word) {
      const currIndex = s.indexOf(v, prevIndex + 1);
      if (currIndex > prevIndex) {
        match++;
        prevIndex = currIndex;
      } else {
        break;
      }
    }
    if (match === word.length) result++;
  }

  return result;
};

console.log(numMatchingSubseq("abcde", ["a", "bb", "acd", "ace"]));
