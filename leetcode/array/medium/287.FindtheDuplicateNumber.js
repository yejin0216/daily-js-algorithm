var findDuplicate = function(nums) {
    const array = nums.sort((a, b) => a-b);

    let i = 1;
    while ( i < array.length ) {
        if ( array[i] === array[i-1] ) {
            return array[i];
        }
        i++;
    }
};


console.log(findDuplicate([1,3,4,2,2])) // 2
console.log(findDuplicate([3,1,3,4,2])) // 3
console.log(findDuplicate([2,2,2,2,2])) // 2