function solution(s){  
    const map = new Map();
    str.map(s => map.set(s, s));
    const result = [];
    for ( const [k, v] of map ) {
        result.push(v);
    }
    return result;
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));