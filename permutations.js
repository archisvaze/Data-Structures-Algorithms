function permutations(word) {
    let res = [];
    permutationsHelper(word, "", res);
    return ((res).sort());
}
function remove(str, index) {
    let arr = str.split("");
    arr.splice(index, 1);
    return arr.join("");
}
function permutationsHelper(word, letters, res) {
    if (word.length === 0 && !res.includes(letters)) {
        res.push(letters);
    }
    if (word.length === 1 && !res.includes(word + letters)) {
        res.push(word + letters);
    }
    else {
        for (let i = word.length - 1; i >= 0; i--) {
            letters += (word[i]);
            let newWord = remove(word, i);
            permutationsHelper(newWord, letters, res);
            letters = letters.slice(0, letters.length - 1);
        }
    }
}
console.log(permutations("aabb"));