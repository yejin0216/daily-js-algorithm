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

// console.log(InsertionSorting([9,3,5,7,1]))

// 3. Merge Sorting

// Counting Sorting O(n+k) 정렬할 때 추가적인 메모리(숫자 개수를 저장할 공간, 결과를 저장할 공간)가 필요하다는 점과, 가장 큰 숫자에 영향을 받는다는 점은 단점입니다
const CountingSorting = (nums) => {
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    const sumArray = Array.from({length: max - min + 1}, () => 0);

    for (let i=0; i<nums.length; i++) {
        sumArray[nums[i]-min] += 1;
    }

    const accArray = [sumArray[0]];
    for (let i=1; i<nums.length; i++) {
        accArray.push(accArray[i-1] + sumArray[i]);
    }

    const result = Array.from({length: max - min + 1}, () => 0);
    for ( let i=nums.length-1; i>=0; i-- ) {
        const idx = accArray[nums[i]-min];
        result[idx-1] = nums[i];
        accArray[nums[i]-min] -= 1;
    }

    return result;
}

console.log(CountingSorting([3,5,5,10,1,5,3,2,1,10]))

