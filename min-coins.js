function minCoins(coins, amount) {
    for (let i of coins) {
        if (i === amount) {
            return 1;
        }
    }
    let dp = new Array(amount + 1).fill(Number.POSITIVE_INFINITY);
    dp[0] = 0;
    // if (amount === 0) {
    //     return dp[amount];
    // }
    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0) {
                let include = 1 + dp[i - coins[j]];
                let exclude = dp[i];
                dp[i] = Math.min(include, exclude);
            }
        }
    }
    if (dp[amount] === Number.POSITIVE_INFINITY) {
        return -1;
    }
    else {
        return dp[amount];
    }
}

console.log(minCoins([1, 2], 0));



