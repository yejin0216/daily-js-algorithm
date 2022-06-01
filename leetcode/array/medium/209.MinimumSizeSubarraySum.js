/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let i=0;
    let j=0;
    let sum=nums[0];
    let result = [];
    while ( j < nums.length ) {
        if ( sum < target ) {
            j++;
            sum += nums[j];
        } else if ( sum > target ) {
            result.push(j-i+1);
            sum -= nums[i];
            i++;
        } else {
            result.push(j-i+1);
            sum -= nums[i];
            i++; j++;
            sum += nums[j];
        }
    }

    return result.length === 0 ? 0 : Math.min(...result);
};

console.log(minSubArrayLen(3, [3, 1, 2, 4]))
console.log(minSubArrayLen(1, [1, 1]))
console.log(minSubArrayLen(1, [1]))
console.log(minSubArrayLen(7, [2,3,1,2,4,3]))
console.log(minSubArrayLen(4, [1,4,4]))
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]))
console.log(minSubArrayLen(11, [1,2,3,4,5]))