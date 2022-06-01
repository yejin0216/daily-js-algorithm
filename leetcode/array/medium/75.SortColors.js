/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // let i = 0;

    // while ( i < nums.length ) {
    //     if ( nums[i] === 0 ) {
    //         let j = i;
    //         while ( j >= 1 ) {
    //             if ( nums[j] === nums[j-1] ) break;
    //             [nums[j], nums[j-1]] = [nums[j-1], nums[j]];
    //             j--;
    //         }
    //     }
    //     if ( nums[i] === 1 ) {
    //         let j = i;
    //         while ( j >= 1 ) {
    //             if ( nums[j-1] === 0 ) break;
    //             [nums[j], nums[j-1]] = [nums[j-1], nums[j]];
    //             j--;
    //         }
    //     }
    //     i++;
    // }

    let i = 0;
    let j = 0;
    let k = nums.length - 1;

    while ( j <= k ) {
        if ( nums[j] === 2 ) {
            [nums[k], nums[j]] = [nums[j], nums[k]]; // swap
            k--;
        }
        if ( nums[j] === 0 ) {
            [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
            i++;
            j++;
        }
        j++;
    }


    return nums;
};

console.log(sortColors([2,0,2,1,1,0]))
console.log(sortColors([0,1,2]))
console.log(sortColors([0,0,0,0,0,1]))