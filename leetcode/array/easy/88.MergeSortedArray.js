/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if ( nums1.length === 0 ) return nums1 = nums2;
    if ( nums2.length === 0 ) return nums1;

    for ( let i=m, j=0; i<nums1.length; i++, j++ ) {
        nums1[i] = nums2[j]
        let k = i;
        while (k >= 0) {
            if ( nums1[k] <= nums1[k-1] ) {
                [nums1[k], nums1[k-1]] = [nums1[k-1], nums1[k]];
            } else {
                break;
            }
            k--;
        }
    }

    return nums1;
};

// console.log(merge([2,5,6,0,0,0], 3, [1,4,5], 3))
// console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))
// console.log(merge([], 0, [1], 1))
// console.log(merge([1], 1, [], 0))
// console.log(merge([0], 0, [1], 1))
console.log(merge([-1,0,0,3,3,3,0,0,0], 6, [1, 2, 2], 3))