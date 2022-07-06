/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const map = new Map();

  for (const w of words) {
    if (map.has(w)) {
      map.set(w, map.get(w) + 1);
    } else {
      map.set(w, 1);
    }
  }

  const array = [];
  for (const [key, value] of map) {
    array.push([key, value]);
  }

  const sorted = array.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0].localeCompare(b[0]); // 알파벳 오름차순
    }
    return b[1] - a[1];
  });

  const result = [];
  for (const value of sorted) {
    if (result.length === k) {
      break;
    }
    result.push(value[0]);
  }

  return result;
};

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 3));
// console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2));
// console.log(
//   topKFrequent(
//     ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
//     4
//   )
// );
