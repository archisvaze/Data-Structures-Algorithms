function deepCopyAndEdit(arr, val) {
    let copyArr = [];
    for (let i = 0; i < arr.length; i++) {
        let tempArr = [];
        for (let j = 0; j < arr[i].length; j++) {
            tempArr.push(arr[i][j]);
        }
        copyArr.push(tempArr);
    }
    
    ((copyArr[copyArr.length - 1])[(copyArr[copyArr.length - 1]).length - 1]) = val; // change value 

    return copyArr;
}

let arr = [[100, 100, 2], [9, 10, 18], [3, 4, 8]];

console.log("Original Array = " , arr);
console.log("Deep Copied Array = " , deepCopyAndEdit(arr, 90));


function clone(arr) {
    let copyArr = [];
    for (let i = 0; i < arr.length; i++) {
        let tempArr = [];
        for (let j = 0; j < arr[i].length; j++) {
            tempArr.push(arr[i][j]);
        }
        copyArr.push(tempArr);
    }
    return copyArr;
}