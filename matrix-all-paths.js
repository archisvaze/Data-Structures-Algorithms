
function getPath(matrix, result, row, col, count, k, allPaths) {
    if (row >= matrix.length || col >= matrix[row].length) {
        return;
    }
    if (row < 0 || col < 0) return;
    result[count] = matrix[row][col];
    getPath(matrix, result, row + 1, col, count + 1, k, allPaths); //down
    getPath(matrix, result, row, col + 1, count + 1, k, allPaths);  //right
    if (count + 1 === k) {
        let i = 0;
        let arr = [];
        while (i < k) {
            arr.push(result[i]);
            i++;
        }
        allPaths.push(arr);
    }
}

let matrix = [
    [13, 14, 13, 1],
    [8, 12, 12, 9],
    [15, 15, 14, 14],
    [15, 10, 10, 5]
]
let n = 4;
let m = 4;
let result = []
let allPaths = [];


getPath(matrix, result, 0, 0, 0, n + m - 1, allPaths)
console.log(allPaths)