function minMaxTotal(arr) {
    return arr.reduce((acc, val) => {
        acc[0] = (acc[0] === undefined || val < acc[0]) ? val : acc[0] //min
        acc[1] = (acc[1] === undefined || val > acc[1]) ? val : acc[1] //max
        acc[2] = (acc[2] === undefined || false) ? val : acc[2] + val //sum
        return acc;
    }, []);
}

let arr = new Array(10000000).fill(0).map((item) => Math.floor(Math.random() * 10000 + 10000));
let arr2 = [1, 2, 3, 4, 5, 6];

console.log(minMaxTotal(arr))
console.log(minMaxTotal(arr2));

