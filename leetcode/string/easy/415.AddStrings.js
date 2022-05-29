/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = 0;
    const num1Arr = [...num1];
    const num2Arr = [...num2];
    const result = [];

    let carry = 0;
    let char = 0;
    while ( i < num1.length || i < num2.length || carry > 0) {
        const n1 = parseInt(num1.length - 1 - i >= 0 ? num1Arr[num1.length - 1 - i] : "0");
        const n2 = parseInt(num2.length - 1 - i >= 0 ? num2Arr[num2.length - 1 - i] : "0");

        char = (n1+n2+carry) % 10;
        carry = Math.trunc((n1+n2+carry) / 10);
        result.push(char);

        i++;
    }

    return result.reverse().join("");
};

// console.log(addStrings("584", "18"));
// console.log(addStrings("456", "77"));
console.log(addStrings("1", "9"));
// console.log(addStrings("11", "99"));
// console.log(addStrings("0", "0"));
// console.log(addStrings("123", "11"));
// console.log(addStrings("456", "77"));
// console.log(addStrings("0", "0"));
// console.log(addStrings("9", "99"));