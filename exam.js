function encrypt(str){
    let arr = [];
    let newStr = "";
    for (let i = 0; i< str.length; i++){
        arr[i] = str[i];
    }
   
    for (let i = 0; i< str.length; i++){
        if (arr[i] === "a") arr[i] = 0;
        else if (arr[i] === "e") arr[i] = 1;
        else if (arr[i] === "i") arr[i] = 2;
        else if (arr[i] === "o") arr[i] = 2;
        else if (arr[i] === "u") arr[i] = 3;
    }
    if (arr.length % 2 === 0){
        arr.unshift("ly");
    }
    else if (arr.length % 2 === 1){
        arr.push("aca");
    }

    for (let i = 0; i< arr.length; i++){
        newStr += arr[i];
    }
    return (newStr);

}
console.log(encrypt("apple")); // "0ppl1aca"

console.log(encrypt("karaca")); // "lyk0r0c0"

console.log(encrypt("burak")); // "b3r0kaca"

console.log(encrypt("alpaca")); // "ly0lp0c0"




function repeatArray(num){
    let n = num;
    let i = 1;
    let arr= [];
    while( i <= num){
        let insideArr = [];
        let j = i;
        while ( j <= num){
            insideArr.push(n);
            j++;
            
        }
        i++; 
        n--;
        arr.push(insideArr);
    }
    let newArr = [];
    for(let  i = 0, j = num-1; i < arr.length, j> 0; i++,j--){
        newArr[i] = arr[j];

}

let finalArr = [];
for (let i = 0; i < num-1; i++){
    finalArr.unshift(newArr[i]);
}
for (let i = 0; i < num; i++){
    finalArr.unshift(arr[i]);
}

return (finalArr);
}

console.log (repeatArray(7));


