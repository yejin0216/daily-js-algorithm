/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let startIndex = 0;
    let endIndex = nums.length - 1;

    while ( startIndex <= endIndex ) {
        let midIndex = Math.floor( (startIndex + endIndex) / 2 );
        if  ( nums[midIndex] === target ) {
            return midIndex;
        } else if ( nums[midIndex] > target ) {
            endIndex = midIndex - 1;
        } else {
            startIndex = midIndex + 1;
        }
    }

    return startIndex;
};

console.log(searchInsert([1,3,5,6], 5)); //2
console.log(searchInsert([1,3,5,6], 2)); //1
console.log(searchInsert([1,3,5,6], 7)); //4