
function knapsack(weight, value, bagWeight) {
    let item = value.length - 1;
    return knapsackHelper(weight, value, bagWeight, item);
}
function knapsackHelper(weight, value, bagWeight, item) {
    //base case where bagweight is exceeded.
    if (bagWeight < 0) {
        return Number.NEGATIVE_INFINITY;
    }
    //base case where no items are left or capacity = 0;
    if (item < 0 || bagWeight === 0) {
        return 0;
    }
    //picking one item and calling recusion with reduced capacity 
    let include = value[item] + knapsackHelper(weight, value, bagWeight - weight[item], item - 1)

    //leave the current item and call recursion on the reamaining items = item - 1.
    let exclude = knapsackHelper(weight, value, bagWeight, item - 1);

    return Math.max(include, exclude);
}

let weight = [10, 2, 3, 5];
let value = [10, 12, 18, 7];
let bagWeight = 13;
console.log(knapsack(weight, value, bagWeight));