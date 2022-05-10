function solution(n) {
    let sum = 1+n;
    if (n%2 === 0) {
        return sum * (n/2);
    } else {
        return (sum * Math.floor(n/2)) + ((1+n)/2)
    }
}

console.log(solution(3))
console.log(solution(4))