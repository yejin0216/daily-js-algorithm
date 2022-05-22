/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let RRow = 0;
    let RCol = 0;
    for ( let i=0; i<board.length; i++ ) {
        for ( let j=0; j<board[0].length; j++ ) {
            if ( board[i][j] === "R" ) {
                RRow = i;
                RCol = j;
                break;
            }
        }
    }

    let result = 0;

    // 좌
    for ( let i=RCol-1; i>=0; i--) {
        // console.log(board[RRow][i])
        if ( board[RRow][i] === "B" ) {
            break;
        }
        if ( board[RRow][i] === "p" ) {
            result++;
            break;
        }
    }
    // 우
    for ( let i=RCol+1; i<board[0].length; i++) {
        // console.log(board[RRow][i])
        if ( board[RRow][i] === "B" ) {
            break;
        }
        if ( board[RRow][i] === "p" ) {
            result++;
            break;
        }
    }

    // 위
    for ( let i=RRow-1; i>=0; i-- ) {
        // console.log(board[i][RCol])
        if ( board[i][RCol] === "B" ) {
            break;
        }
        if ( board[i][RCol] === "p" ) {
            result++;
            break;
        }
    }

    // 아래
    for ( let i=RRow+1; i<board.length; i++ ) {
        // console.log(board[i][RCol])
        if ( board[i][RCol] === "B" ) {
            break;
        }
        if ( board[i][RCol] === "p" ) {
            result++;
            break;
        }
    }

    return result;
};

// console.log(numRookCaptures(
//     [[".",".",".",".",".",".",".","."],
//     [".",".",".","p",".",".",".","."],
//     [".",".",".","R",".",".",".","p"],
//     [".",".",".",".",".",".",".","."],
//     [".",".",".",".",".",".",".","."],
//     [".",".",".","p",".",".",".","."],
//     [".",".",".",".",".",".",".","."],
//     [".",".",".",".",".",".",".","."]]))
//
// console.log(numRookCaptures([[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]))
//
// console.log(numRookCaptures([[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]))

console.log(numRookCaptures([
    [".",".",".",".",".",".",".","."],
    [".",".",".","p",".",".",".","."],
    [".",".","p","p",".",".",".","."],
    [".","p","p","R",".","p",".","p"],
    [".",".",".","p",".",".",".","."],
    [".",".",".",".",".","p",".","."],
    [".",".",".","p",".",".",".","."],
    [".",".",".",".",".",".",".","."]]))