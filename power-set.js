function powerSet(array) {
  let result = [[]];

  for (let letter of array) {
    let length = result.length;
    for (let i = 0; i < length; i++) {
      let temp = result[i].slice(0);
      temp.push(letter)
      result.push(temp)
    }
  }
  return result;
}

console.log(powerSet([2, 1]));