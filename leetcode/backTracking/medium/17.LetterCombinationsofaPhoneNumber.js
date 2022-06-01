/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = new Map();
    map.set("2", ['a', 'b', 'c']);
    map.set("3", ['d', 'e', 'f']);
    map.set("4", ['g', 'h', 'i']);
    map.set("5", ['j', 'k', 'l']);
    map.set("6", ['m', 'n', 'o']);
    map.set("7", ['p', 'q', 'r', 's']);
    map.set("8", ['t', 'u', 'v']);
    map.set("9", ['w', 'x', 'y', 'z']);

    const digitArr = [...digits];
    const result = [];

    function bt(index = 0, letter = "") {
        const number = digitArr[index];
        const chars = map.get(number);

        if ( index >= digitArr.length ) {
            result.push(letter);
        } else {
            for ( const c of chars ) {
                bt(index+1, letter + c);
            }
        }
    }

    bt();

    return result;
};

console.log(letterCombinations('23'))