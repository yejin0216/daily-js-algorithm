/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const nums1Copy = nums1.slice().sort((a, b) => a-b);
    const nums2Copy = nums2.slice().sort((a, b) => a-b);
    const result = [];

    for ( let i=0; i<nums1Copy.length; i++ ) {
        const target = nums1Copy[i];
        // TODO low, high를 for 문 밖에 선언해서 오류 발생했었음.
        let low = 0;
        let high = nums2Copy.length-1;
        while ( low <= high ) {
            const mid = Math.floor((low+high)/2);
            if ( nums2Copy[mid] === target ) {
                // TODO 조건문 안넣어서 오류 발생했었음.
                if ( result.length === 0 || (result.length >= 1 && result[result.length-1] !== target)) result.push(target);
                break;
            } else if ( nums2Copy[mid] < target ) {
                low = mid+1;
            } else {
                high = mid-1;
            }
        }
    }

    return result;
};

// console.log(intersection([1,2,2,1], [2,2])); //[2]
// console.log(intersection([4,9,5], [9,4,9,8,4])); //[9,4]

console.log(intersection([3, 7, 8, 9], [3, 9]));
console.log(intersection([3, 7, 8, 9], [3, 3, 3, 3]));
console.log(intersection([3, 7, 8, 9], [0]));