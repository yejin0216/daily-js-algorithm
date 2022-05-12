function solution(arr){
    const result = [];

    for ( let i=0; i<arr.length; i++ ) {
        let count = 1;
        for ( let j=0; j<arr.length; j++ ) {
            if ( arr[i] < arr[j] ) {
                count++;
            }
        }
        result.push(count);
    }

    return result;
}

let arr=[87, 89, 92, 100, 76]; // 2, 3, 5, 5, 6, 1
console.log(solution(arr));