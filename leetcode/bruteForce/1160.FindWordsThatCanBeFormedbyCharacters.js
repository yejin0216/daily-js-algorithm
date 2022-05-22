/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let result = 0;

    for ( let i=0; i<words.length; i++ ) {
        let checked = true;
        const tempArr = [...chars];
        for ( let j=0; j<words[i].length; j++ ) {
            const char = words[i][j];
            const index = tempArr.indexOf(char);
            if ( index > -1 ) {
                tempArr[index] = "";
            } else {
                checked = false;
                break;
            }
        }
        if ( checked ) {
            result += words[i].length;
        }
    }

    return result;
};

console.log(countCharacters(["cat","bt","hat","tree"], "atach")); // 6
console.log(countCharacters(["hello","world","leetcode"], "welldonehoneyr")); // 10
console.log(countCharacters(["hello","world","leetcode"], "w"));
console.log(countCharacters(["hello","world","leetcode"], "eelechellootdoreodw"));