/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    // binary search
    let lt = 0;
    let rt = nums.length-1;

    while ( lt < rt ) {
        let pivot = Math.trunc((lt+rt)/2);
        let nextNum = nums[pivot+1];

        if ( nums[pivot] < nextNum ) {
            lt = pivot+1;
        } else {
            rt = pivot;
        }
    }

    return lt;

    // linear search
    // for (let i = 0; i < nums.length - 1; i++) {
    //     if (nums[i] > nums[i + 1])
    //         return i;
    // }
    // return nums.length - 1;
};

console.log(findPeakElement([1,2,3,1]))
console.log(findPeakElement([1,2,1,3,5,6,4]))
console.log(findPeakElement([1,2,1,3,5,6,7]))