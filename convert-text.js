// run: "node convert-text.js" in terminal
var readlineSync = require('readline-sync');
var string = readlineSync.question('Enter a number in words: \n');
function parseInt(string) {
    let obj = { 'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10, 'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14, 'fifteen': 15, 'sixteen': 16, 'seventeen': 17, 'eighteen': 18, 'nineteen': 19, 'twenty': 20, 'thirty': 30, 'forty': 40, 'fifty': 50, 'sixty': 60, 'seventy': 70, 'eighty': 80, 'ninety': 90, 'hundred': 100, 'thousand': 1000, 'million': 1000000 };
    if (Object.keys(obj).includes(string)) return obj[string];
    let arr = string.split(' ');
    for (let word in arr) {
        if (arr[word] === 'and') arr.splice(word, 1)
    }
    let numberArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('-')) {
            let tempArr = arr[i].split('-');
            let sum = 0;
            for (let tempWord of tempArr) {
                sum += obj[tempWord];
            }
            numberArr.push(sum);
        } else { numberArr.push(obj[arr[i]]); }
    }
    let hundredIndex = numberArr.indexOf(100);
    while (hundredIndex !== -1 && numberArr[hundredIndex - 1] && numberArr[hundredIndex - 1] !== 1000) {
        numberArr.splice(hundredIndex, 1, 100 * numberArr[hundredIndex - 1]);
        numberArr.splice(hundredIndex - 1, 1);
        hundredIndex = numberArr.indexOf(100);
        if (hundredIndex === 0) hundredIndex = numberArr.lastIndexOf(100);
    }
    let thousandIndex = numberArr.indexOf(1000);
    while (thousandIndex !== -1 && numberArr[thousandIndex - 1]) {
        let beforeThousand = numberArr.slice(0, thousandIndex).reduce((a, b) => a + b) * 1000;
        numberArr.splice(thousandIndex, 1, beforeThousand);
        numberArr = numberArr.slice(thousandIndex)
        thousandIndex = numberArr.indexOf(1000);
    }
    let millionIndex = numberArr.indexOf(1000000);
    while (millionIndex !== -1 && numberArr[millionIndex - 1]) {
        numberArr.splice(millionIndex, 1, 1000000 * numberArr[millionIndex - 1]);
        numberArr.splice(millionIndex - 1, 1);
        millionIndex = numberArr.indexOf(1000000);
    }
    // console.log(numberArr)
    return (numberArr.reduce((a, b) => a + b));
}

console.log(parseInt(string)); 