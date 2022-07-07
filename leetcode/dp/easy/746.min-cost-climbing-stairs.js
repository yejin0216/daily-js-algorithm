/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const array = [0, 0];

  for (let i = 2; i <= cost.length; i++) {
    const value = Math.min(
      array[i - 2] + cost[i - 2],
      array[i - 1] + cost[i - 1]
    );
    array.push(value);
  }

  return array[array.length - 1];
};

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
