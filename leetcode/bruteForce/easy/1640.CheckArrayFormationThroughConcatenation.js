const solution = (arr, pieces) => {
    let exist = false;

    for ( let i=0; i<arr.length; i++ ) {
        exist = false;
        for ( let j=0; j<pieces.length; j++ ) {
            if ( arr[i] === pieces[j][0] ) {
                if ( pieces[j].length === 1 ) {
                    exist = true;
                    break;
                } else {
                    let isSame = true;
                    for ( let k=1; k<pieces[j].length; k++ ) {
                        if ( arr[i+k] !== pieces[j][k] ) { //뒤의 문자들을 확인한다.
                            isSame = false;
                            break;
                        }
                    }
                    exist = isSame;
                    i = i+pieces[j].length-1; //확인한 문자 다음 숫자로 건너뛴다.
                    break;
                }
            }
        }
        if ( !exist ) {
            break;
        }
    }

    return exist;
}
//
// console.log(solution([15,88], [[88],[15]]));
// console.log(solution([15,11], [[88],[15]]));
// console.log(solution([49,18,16], [[16,18,49]]));
// console.log(solution([91,4,64,78], [[78],[4,64],[91]]));
// console.log(solution([91,4,64,78], [[78],[64],[4,91]]));
// console.log(solution([37,69,3,74,46], [[37,69,3,74,46]]))
console.log(solution([97,80,56,85,60,33,26,23,99,98,19,34,30,66], [[98,19],[23,99],[97,80,56,85,60],[33,26],[34],[30,66]]))