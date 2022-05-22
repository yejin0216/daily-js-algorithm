function solution(str1, str2) {
    const aArr = str1.split("");
    const bArr = str2.split("");

    const aMap = new Map();
    for ( const k of aArr ) {
        if ( aMap.get(k) ) {
            aMap.set(k, aMap.get(k)+1);
        } else {
            aMap.set(k, 1);
        }
    }

    const bMap = new Map();
    for ( const k of bArr ) {
        if ( bMap.get(k) ) {
            bMap.set(k, bMap.get(k)+1);
        } else {
            bMap.set(k, 1);
        }
    }

    for ( const [k, v] of aMap ) {
        if ( aMap.get(k) !== bMap.get(k) ) {
            return "NO";
        }
    }

    return "YES"
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b))

a = "AbaAeCE";
b = "baeeACA";
console.log(solution(a, b))

