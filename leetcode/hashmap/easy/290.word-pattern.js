/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, ss) {
  const str = ss.split(" ");

  if (pattern.length !== str.length) return false;

  const sMap = new Map();
  const pMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i];
    const s = str[i];
    if (!pMap.has(p) && !sMap.has(s)) {
      pMap.set(p, s);
      sMap.set(s, p);
    } else if (!(pMap.get(p) === s && sMap.get(s))) {
      return false;
    }
  }

  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("aaaa", "dog cat cat dog"));
console.log(wordPattern("aaaa", "dog dog dog cat"));
console.log(wordPattern("aaba", "dog dog cat dog"));

console.log(wordPattern("aaa", "aa aa aa aa"));
