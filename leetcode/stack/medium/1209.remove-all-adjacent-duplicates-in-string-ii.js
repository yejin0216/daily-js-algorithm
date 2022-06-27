/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  // First delete "eee" and "ccc", get "ddbbbdaa"
  // Then delete "bbb", get "dddaa"
  // Finally delete "ddd", get "aa"

  const alpaStack = [];
  const indexStack = [];

  for (const str of s) {
    if (alpaStack[alpaStack.length - 1] !== str) {
      alpaStack.push(str);
      indexStack.push(1);
    } else {
      let number = indexStack.pop();
      if (number + 1 === k) {
        alpaStack.pop();
      } else {
        indexStack.push(number + 1);
      }
    }
  }

  let result = "";
  for (let i = 0; i < alpaStack.length; i++) {
    result += alpaStack[i].repeat(indexStack[i]);
  }

  return result;
};

// console.log(removeDuplicates("deeedde", 3))
console.log(removeDuplicates("deeedbbcccbdaa", 3));
console.log(removeDuplicates("pbbcggttciiippooaais", 2));
