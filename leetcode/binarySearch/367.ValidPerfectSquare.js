/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let low = 1;
  let high = Math.round(num / 2);

  let result = 0;

  while (low <= high) {
    const mid = Math.round((low+high) / 2);
    if ( mid * mid === num ) {
      result = mid;
      break;
    } else if ( mid * mid < num )  {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return !!result;
};

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));
