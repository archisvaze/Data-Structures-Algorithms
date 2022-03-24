function nQueen(n) {
    let choice1 = [];
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = ' ';
        }
    }
    nQueenHelper(matrix, n, 0);
}

function nQueenHelper(matrix, n, row) {
    if (n === 0) {
        console.table(matrix);
        return;
    }
    else {
        for (let col = 0; col < matrix.length; col++) {
            if (isValid(row, col, matrix)) {
                matrix[row][col] = 'Q';
                nQueenHelper(matrix, n - 1, row + 1);
                matrix[row][col] = ' ';
            }
        }
    }
}

function isValid(row, col, matrix) {
    for (let i = 0; i < row; i++) {
        if (matrix[i][col] === 'Q') return false;
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (matrix[i][j] === 'Q') return false;
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < matrix.length; i--, j++) {
        if (matrix[i][j] === 'Q') return false;
    }
    return true;
};

nQueen(5);