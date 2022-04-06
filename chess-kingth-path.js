//create a board and fill it with null
let board = [];
for (let i = 0; i < 8; i++) {
    board[i] = [];
    for (let j = 0; j < 8; j++) {
        board[i][j] = null;
    }
}

//  place '0' at start spot when the function calls and replace 1st move with '1' then from '1'spot all next possible moves with '2' and so on...

function knightMinPath([startX, startY], [endX, endY]) {
    //set the start postion as 0
    let steps = 0;
    isValidMove(startX, startY, steps);
    //keep looping till we find endX endY
    while (board[endX][endY] === null) {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (board[i][j] === steps) {
                    allMoves(i, j, steps + 1);
                }
            }
        }
        steps++;
    }
    return board[endX][endY];
}
function allMoves(x, y, steps) {
    isValidMove(x - 1, y - 2, steps);
    isValidMove(x - 2, y - 1, steps);
    isValidMove(x - 2, y + 1, steps);
    isValidMove(x - 1, y + 2, steps);
    isValidMove(x + 1, y + 2, steps);
    isValidMove(x + 2, y + 1, steps);
    isValidMove(x + 2, y - 1, steps);
    isValidMove(x + 1, y - 2, steps);
}
function isValidMove(x, y, steps) {
    if ((x >= 0) && (x <= 7) && (y >= 0) && (y <= 7) && board[x][y] === null) {
        board[x][y] = steps;
    }
}

console.log(knightMinPath([3, 3], [0, 6]));
