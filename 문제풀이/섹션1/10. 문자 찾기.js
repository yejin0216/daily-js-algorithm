function solution(s, t){
    // return s.length - s.replace(/R/g, '').length;
    return s.split(t).length-1;
}

// let str="COMPUTERPROGRAMMING";
const str = "ROOOROOOR"
console.log(solution(str, 'R'));