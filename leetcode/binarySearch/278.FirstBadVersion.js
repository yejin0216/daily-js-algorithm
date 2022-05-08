const isBadVersion = (n) => {
    const bad = [false, false, false, false, false, true];
    return bad[n];
}

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let startIndex = 0;
        let endIndex = n-1;

        while (startIndex <= endIndex) {
            const midIndex = Math.floor((startIndex+endIndex)/ 2);
            if ( isBadVersion(midIndex) ) {
                endIndex = midIndex-1;
            } else {
                startIndex = midIndex+1;
            }
        }

        return startIndex;
    };
};

console.log(solution(isBadVersion)(5))