/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // if (n === 1 || n === 2) return n;
  // return climbStairs(n - 1) + climbStairs(n - 2);

  const array = [1, 2];
  for (let i = 2; i < n; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }

  return array[n - 1];
};

console.log(climbStairs(3));
