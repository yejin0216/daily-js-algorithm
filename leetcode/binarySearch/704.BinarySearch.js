/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let lt = 0;
    let rt = nums.length-1;
    let pivot = 0;

    while ( lt <= rt ) {
        pivot = Math.floor((rt + lt) / 2);
        if ( target === nums[pivot] ) {
            return pivot;
        } else if ( nums[pivot] < target ) {
            lt = pivot+1;
        } else {
            rt = pivot-1;
        }
    }

    return -1;
};

console.log(search([-1,0,3,5,9,12], 9))
console.log(search([-1,0,3,5,9,12], 2))