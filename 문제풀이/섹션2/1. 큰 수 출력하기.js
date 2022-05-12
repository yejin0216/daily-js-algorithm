function solution(arr){
    const result = [arr[0]]
    for ( let i=1; i<arr.length; i++ ) {
       arr[i-1] < arr[i] && result.push(arr[i]);
    }
    return result;
}

// let arr=[7, 3, 9, 5, 6, 12];
let arr=[7, 100, 99, 35, 3, 99, 33, 1];
console.log(solution(arr));