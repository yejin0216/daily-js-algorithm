function solution(arr){
    let max = 0;
    let result = 0;
    for ( let i=0; i<arr.length; i++) {
        if ( max < arr[i] ) {
            max = arr[i];
            result++;
        }
    }
    return result;
}

let arr=[130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));