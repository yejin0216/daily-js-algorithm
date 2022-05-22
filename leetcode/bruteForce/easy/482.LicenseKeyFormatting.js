/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    const str = [...s.replace(/-/g, '').toUpperCase()];
    const result = [];
    let count = 0;

    for ( let i=str.length-1; i>=0; i-- ) {
        result.push(str[i]);
        count++;
        if ( count%k === 0 && i !== 0 ) {
            result.push('-');
        }
    }

    return result.reverse().join("");
};

console.log(licenseKeyFormatting("--a-a-a-a--", 2))
console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4))
console.log(licenseKeyFormatting("2-5g-3-J", 2))
console.log(licenseKeyFormatting("2-5g-3-J", 1))
console.log(licenseKeyFormatting("2-5g-3J", 1))