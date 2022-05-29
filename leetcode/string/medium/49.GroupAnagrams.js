/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();

    for ( let i=0; i<strs.length; i++ ) {
        const str = strs[i].split("").sort((a, b) => a.charCodeAt(0)-b.charCodeAt(0)).join("");
        map.set(str, map.has(str) ? [...map.get(str), strs[i]] : [strs[i]]);
    }

    const result = [];

    for ( const [k, v] of map ) {
        result.push(v);
    }

    return result;
};

/**
 * key point:
 * prime multiply prime is unique, each char canbe represented by a prime
 * since [a-z] to  [0-25]
 * use `[charCodeAt() - 97]` to get unique index from the prime array
 * the prodcut can be set to the key name "prod"
 **/
var groupAnagrams = function (strs) {
    const map = {};
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
    strs.forEach(str => {
        let prod = str.split("").reduce((r, c) => r * primes[c.charCodeAt() - 97], 1);
        map[prod] ? map[prod].push(str) : map[prod] = [str];
    });
    return Object.values(map);
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))