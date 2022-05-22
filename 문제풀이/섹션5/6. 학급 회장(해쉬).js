function solution(s) {
    const arr = s.split("");
    const map = new Map();

    for ( const v of arr ) {
        if ( map.get(v) ) {
            map.set(v, map.get(v)+1);
        } else {
            map.set(v, 1);
        }
    }

    let max = 0;
    let result = "";
    for ( const [k, v] of map) {
        if ( max < v ) {
            max = v;
            result = k;
        }
    }

    return result;
 }

let str = "BACBACCACCBDEDE";
console.log(solution(str));
