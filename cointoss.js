function coin(n) {
    let res = [];
    coinHelper(n, res, '')
    console.log(res);
}
function coinHelper(n, res, curr) {
    if (n <= 0) {
        return res;
    }
    if (n === 1) {
        res.push(curr + 'H');
        res.push(curr + 'T');
    }
    else {
        coinHelper(n - 1, res, curr + 'H')
        coinHelper(n - 1, res, curr + 'T')
    }
}

coin(2);