/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sMap = new Map();
  const tMap = new Map();

  if (s.length !== t.length) {
    return false;
  }

  for (const value of s) {
    if (sMap.has(value)) {
      sMap.set(value, sMap.get(value) + 1);
    } else {
      sMap.set(value, 1);
    }
  }

  for (const value of t) {
    if (tMap.has(value)) {
      tMap.set(value, tMap.get(value) + 1);
    } else {
      tMap.set(value, 1);
    }
  }

  for (const [key, value] of tMap) {
    if (value !== sMap.get(key)) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
