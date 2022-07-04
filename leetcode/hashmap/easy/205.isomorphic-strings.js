/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const map = new Map();
  const reverseMap = new Map();

  const sArray = s.split("");
  const tArray = t.split("");

  for (let i = 0; i < sArray.length; i++) {
    if (!map.has(sArray[i])) {
      map.set(sArray[i], tArray[i]);
    } else {
      if (map.get(sArray[i]) !== tArray[i]) {
        return false;
      }
    }
    if (!reverseMap.has(tArray[i])) {
      reverseMap.set(tArray[i], sArray[i]);
    } else {
      if (reverseMap.get(tArray[i]) !== sArray[i]) {
        return false;
      }
    }
  }

  if (map.size !== reverseMap.size) return false;

  return true;
};

console.log(isIsomorphic("eggff", "addg"));
console.log(isIsomorphic("eggg", "adda"));
console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("badc", "baba"));
