/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let totalSum = nums.reduce((acc, curr) => acc+curr, 0);
    let ltSum = 0;
    for ( let i=0; i<nums.length; i++ ) {
        if (i !== 0) ltSum += nums[i-1];
        if (ltSum * 2 === totalSum - nums[i]) return i;
    }
    return -1;
};

console.log(pivotIndex([1, 2, 3]))
console.log(pivotIndex([1,7,3,6,5,6]))
console.log(pivotIndex([2, 1, -1]))