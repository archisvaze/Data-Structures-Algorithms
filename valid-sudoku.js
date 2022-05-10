function validSolution(arr) {
    for (let i = 0; i < 9; i++) {
        let horizontalSum = 0;
        let verticalSum = 0;
        for (let j = 0; j < 9; j++) {
            horizontalSum += arr[i][j];
            verticalSum += arr[j][i];
        }
        if (horizontalSum !== 45 || verticalSum !== 45) return false;
    }
    let k = 0;
    let l = 3
    while (l <= 9) {
        let boxSum = 0;
        for (let i = k; i < l; i++) {
            for (let j = k; j < l; j++) {
                boxSum += arr[i][j];
            }
        }
        if (boxSum !== 45) return false;
        l += 3;
        k += 3;
    }
    return true;
}

console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ])); // => true