/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const result = [...grid];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i === 0 && j === 0) continue;
      // 1행 : 앞의 수에 더한다.
      if (i === 0) {
        result[i][j] = result[i][j] + result[i][j - 1];
      } else if (j === 0) {
        result[i][j] = result[i - 1][j] + result[i][j];
      } else {
        result[i][j] =
          Math.min(result[i][j - 1], result[i - 1][j]) + result[i][j];
      }
    }
  }

  return result[result.length - 1][result[0].length - 1];
};

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
console.log(
  minPathSum([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
