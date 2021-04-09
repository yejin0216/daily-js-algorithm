function solution(N) {
    let binary = N.toString(2);  //이진수로 변경함
    let trimed = binary.substring(0, binary.lastIndexOf(1))

    return Math.max(...trimed.split('1').map(item => item.length));
}