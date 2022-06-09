var threeSum = function(nums) {
    const result = [];
    const array = nums.sort((a,b) => a-b);

    for ( let i=0; i<array.length; i++ ) {
        const value = array[i];
        let lt = i+1;
        let rt = array.length-1
        while ( lt < rt ) {
            if ( array[lt] + array[rt] + value === 0 ) {
                if ( result.length === 0 ) {
                    result.push([value, array[lt], array[rt]]);
                } else {
                    let checked = false;
                    for ( let x=0; x<result.length; x++ ) {
                        if ((result[x][0] === value && result[x][1] === array[lt] && result[x][2] === array[rt])) {
                            checked = true;
                        }
                    }
                    if (!checked) result.push([value, array[lt], array[rt]]);
                }
                rt--;
                lt++;
            } else if ( array[lt] + array[rt] < value * -1  ) {
                lt++;
            } else {
                rt--;
            }
        }
    }

    return result;
};
//
console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([]));
console.log(threeSum([0]));
console.log(threeSum([0,0,0,0]))
console.log(threeSum([-2,0,1,1,2]))
console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]))