function solution(board, moves) {
  const stack = [];
  let count = 0;

  for (let i = 0; i < moves.length; i++) {
    const v = moves[i] - 1;
    for (let y = 0; y < board[0].length; y++) {
      if (board[y][v] > 0) {
        if (board[y][v] === stack[stack.length - 1]) {
          count += 2;
          stack.pop();
        } else {
          stack.push(board[y][v]);
        }
        board[y][v] = 0; //TODO 잘못 체크한 부분
        // stack.push(board[y][v]);
        // board[y][v] = 0;
        break;
      }
    }
  }

  // return stack;
  return count;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(a, b));
