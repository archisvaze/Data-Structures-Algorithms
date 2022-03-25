// Exercise 1
function nextGreater(nums) {
    let stack = [];
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > nums[i]) {
                stack.push(nums[j]);
                count++;
                break;
            }
        }
        if (count === 0) {
            stack.push(-1);
        }
    }
    return (stack);
}
// console.log(nextGreater([4, 5, 2, 25]));
// console.log(nextGreater([13, 7, 6, 12]));
// Exercise 2
function minPathSum(matrix) {
    return (helper(matrix, 0, 0));
}
function helper(matrix, i, j) {
    if (i === matrix.length - 1 && j === matrix[0].length - 1) {
        return matrix[i][j];
    }

    if (i > matrix.length - 1 || j > matrix[0].length - 1 || i < 0 || j < 0) {
        return Number.POSITIVE_INFINITY;
    }

    let path1 = helper(matrix, i + 2, j + 1);
    let path2 = helper(matrix, i + 1, j + 2);
    let path3 = helper(matrix, i - 1, j + 2);
    let path4 = helper(matrix, i - 2, j + 1);
    return Math.min(path1, path2, path3, path4) + matrix[i][j];
}

let matrix = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
]

console.log(minPathSum(matrix));



// Do not change the line below
module.exports = { nextGreater, minPathSum };