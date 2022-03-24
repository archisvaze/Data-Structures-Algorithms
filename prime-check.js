function checkPrime(num) {
    let i = 2;
    while (i < num && num !== 2) {
        if (num % i === 0) {
            return false;
        }
        else {
            i++;
        }
    }
    return true;
}