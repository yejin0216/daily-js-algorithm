/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const str = s.split("");
  const map = new Map();

  for (let i = 0; i < str.length; i++) {
    const key = str[i];
    if (map.has(key)) {
      const vArray = map.get(key);
      vArray.push(i);
      map.set(key, vArray);
    } else {
      map.set(key, [i]);
    }
  }

  for (const [key, value] of map) {
    if (value.length === 1) {
      return value[0];
    }
  }

  return -1;
};

console.log(firstUniqChar("l"));
console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));
