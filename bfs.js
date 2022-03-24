function numOfIslands(matrix) {
    let visited = {};
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1 && !visited[`${i},${j}`]) {
                count++;
                //call BFS
                BFS(matrix, i, j, visited);

            }
        }
    }
    return count;
}
function BFS(matrix, row, col, visited) {
    function isValid(nextRow, nextCol) {
        return nextRow >= 0 && nextRow < matrix.length && nextCol >= 0 && nextCol < matrix[nextRow].length && matrix[nextRow][nextCol] === 1 && !visited[`${nextRow},${nextCol}`];
    }
    let queue = [];
    queue.push([row, col])
    visited[`${row},${col}`] = true;
    let offset = [[0, -1], [-1, 0], [0, 1], [1, 0]];
    while (queue.length) {
        let [currRow, currCol] = queue.shift();
        for (let [xOffset, yOffset] of offset) {
            if (isValid(currRow + xOffset, currCol + yOffset)) {
                visited[`${currRow + xOffset},${currCol + yOffset}`] = true;
                queue.push([currRow + xOffset, currCol + yOffset])
            }
        }
    }
}
let matrix = [[0, 1, 1],
[1, 0, 1],
[0, 1, 0]];
console.log(numOfIslands(matrix));