/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const sMap = new Map();
  const tMap = new Map();

  const sArray = s.split("");
  const tArray = t.split("");

  for (let i = 0; i < sArray.length; i++) {
    const str = sArray[i];
    const ttr = tArray[i];

    if (!sMap.has(str) && !tMap.has(ttr)) {
      sMap.set(str, ttr);
      tMap.set(ttr, str);
    } else if (!(sMap.get(str) === ttr && tMap.get(ttr) === str)) {
      return false;
    }
  }

  return true;
};

console.log(isIsomorphic("eggg", "addg"));
console.log(isIsomorphic("eggg", "adda"));
console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("badc", "baba"));
