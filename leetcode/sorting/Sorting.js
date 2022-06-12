// 1. Bubble Sorting : O(N2), Stable
const bubbleSorting = (nums) => {
    for ( let idx=0; idx<nums.length; idx++ ) {
        for ( let i=0; i<nums.length-1; i++ ) {
            if ( nums[i] > nums[i+1] )  {
                [nums[i], nums[i+1]] = [nums[i+1], nums[i]];
            }
        }
    }
    // let i=0;
    // let checked = false;
    // while (i < nums.length-1) {
    //     if ( nums[i] > nums[i+1] )  {
    //         [nums[i], nums[i+1]] = [nums[i+1], nums[i]];
    //         checked = true;
    //     }
    //     if ( i === nums.length-2 ) {
    //         if ( !checked ) {
    //             break;
    //         } else {
    //             i = 0;
    //             checked = false;
    //         }
    //     } else {
    //         i++;
    //     }
    // }
    // for ( let idx=0; idx<nums.length; idx++ ) {
    //     for ( let i=0; i<nums.length-1; i++ ) {
    //         const numsA = nums[i].split("");
    //         const numsB = nums[i+1].split("");
    //         if ( +numsA[0] > +numsB[0] )  {
    //             [nums[i], nums[i+1]] = [nums[i+1], nums[i]];
    //         } else if ( +numsA[0] === +numsB[0] ) {
    //             if ( numsA[1].charCodeAt(0) > numsB[1].charCodeAt(0) ) {
    //                 [nums[i], nums[i+1]] = [nums[i+1], nums[i]];
    //             }
    //         }
    //     }
    // }

    return nums;
}
// console.log(bubbleSorting([9,3,5,7,1]))
// console.log(bubbleSorting(['7a','5b','5a','7b','3c']))

// 2. Insertion Sorting
const InsertionSorting = (nums) => {
    for ( let j=1; j<nums.length; j++ ) {
        for ( let inx=0; inx<j; inx++ ) {
            if ( nums[j] < nums[inx] ) {
                [nums[j], nums[inx]] = [nums[inx], nums[j]];
            }
        }
    }
    return nums;
}

console.log(InsertionSorting([9,3,5,7,1]))

// 3. Merge Sorting
