function solution(arr) {
    let result = [];

    for ( const num of arr ) {
        const reverse = parseInt(num.toString().split("").reverse().join(""));
        let checked = true;
        for ( let i=2; i<reverse; i++ ) {
            if ( reverse % i === 0 ) {
                checked = !checked;
                break;
            }
        }
        if ( checked && reverse !== 1 ) result.push(reverse);
    }

    return result;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
