/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let startIndex = [];
    let endIndex = [];
    let prevValue = nums[0];

    for ( let i=1; i<nums.length; i++ ) {
        if ( prevValue > nums[i] ) {
            let j = i-1;
            let isExist = false;
            endIndex.push(i);
            while ( j >=0 ) {
                if ( nums[j] <= nums[i] ) {
                    startIndex.push(j+1);
                    isExist = true;
                    break;
                }
                j--;
            }
            if (!isExist) startIndex.push(0);
        } else {
            prevValue = nums[i];
        }
    }

    return  startIndex.length === 0 ? 0 : Math.max(...endIndex) - Math.min(...startIndex) + 1;
};
// console.log(findUnsortedSubarray([1,3,5,4,2]) === 4)
// console.log(findUnsortedSubarray([2,6,4,8,10,9,15]) === 5)
// console.log(findUnsortedSubarray([2,2,3,-1,1,0]) === 6)
// console.log(findUnsortedSubarray([-3,2,-2,-1,1,0])  )
// console.log(findUnsortedSubarray([1,3,2,2,4,5]))
console.log(findUnsortedSubarray([1,3,2,2,2]))
console.log(findUnsortedSubarray([1,2,3,5,4]))
console.log(findUnsortedSubarray([0]))

