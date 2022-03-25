function wordGenerator(str) {
    let vowelIndexes = [];
    let res = [];
    for (let i = 0; i < str.length; i++) {
        if (['a', 'e', 'i', 'o', 'u'].includes(str[i])) {
            vowelIndexes.push(i)
        }
    }
    wordGeneratorHelper(res, str, vowelIndexes, 0)
    console.log(res);
}
function wordGeneratorHelper(res, str, vowelIndexes, index) {
    if (index > vowelIndexes.length) {
        return res;
    }
    if (index === vowelIndexes.length - 1) {
        res.push(swap(str, 'a', vowelIndexes[index]));
        res.push(swap(str, 'e', vowelIndexes[index]));
        res.push(swap(str, 'i', vowelIndexes[index]));
        res.push(swap(str, 'o', vowelIndexes[index]));
        res.push(swap(str, 'u', vowelIndexes[index]));
    }
    else {
        wordGeneratorHelper(res, swap(str, 'a', vowelIndexes[index]), vowelIndexes, index + 1);
        wordGeneratorHelper(res, swap(str, 'e', vowelIndexes[index]), vowelIndexes, index + 1);
        wordGeneratorHelper(res, swap(str, 'i', vowelIndexes[index]), vowelIndexes, index + 1);
        wordGeneratorHelper(res, swap(str, 'o', vowelIndexes[index]), vowelIndexes, index + 1);
        wordGeneratorHelper(res, swap(str, 'u', vowelIndexes[index]), vowelIndexes, index + 1);
    }
}
wordGenerator('baba');

function swap(str, vowel, index) {
    let newStr = "";
    let arr = str.split("");
    arr.splice(index, 1, vowel);
    newStr = arr.join('');
    return newStr;
}

