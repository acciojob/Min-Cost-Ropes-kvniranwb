function mincost(arr)
{ 
    if (!arr || arr.length <= 1) return 0;

    let cost = 0;

    while (arr.length > 1) {
        // sort to get two smallest ropes
        arr.sort((a, b) => a - b);

        let first = arr.shift();
        let second = arr.shift();

        let sum = first + second;

        cost += sum;

        arr.push(sum);
    }

    return cost;
}

module.exports = mincost;