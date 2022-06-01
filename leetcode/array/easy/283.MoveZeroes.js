/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    // for ( let i=0; i<nums.length; i++ ) {
    //     if ( nums[i] === 0 ) {
    //         for ( let j=i+1; j<nums.length; j++ ) {
    //             if ( nums[j] !== 0 ) {
    //                 nums[i] = nums[j];
    //                 nums[j] = 0;
    //                 break;
    //             }
    //         }
    //     }
    // }

    // SWAP O(N)
    // let i = 0;
    // for ( let j=0; j<nums.length; j++)  {
    //     if ( nums[j] !== 0 ) {
    //         [nums[i], nums[j]] = [nums[j], nums[i]];
    //         i++;
    //     }
    // }

    // COPY
    let i = 0;
    for ( let j=0; j<nums.length; j++)  {
        if ( nums[j] !== 0 ) {
            nums[i] = nums[j];
            i++;
        }
    }

    while ( i < nums.length ) {
        nums[i] = 0;
        i++;
    }

    return nums;
};

console.log(moveZeroes([0,1,0,3,12]));
console.log(moveZeroes([0]));
console.log(moveZeroes([0, 0, 1, 0, 3, 0, 4, 0, 13]));