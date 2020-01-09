
function swap<T>(arr: T[], firstIndex: number, secondIndex: number) {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
    return arr;
}
function sum_pairs_2nd(ints: number[], n: number): number[] | undefined {
    let complementTracker: complementI = {};
    let unorderedAnswer;
    for (let val of ints) {
        let ComplementVal = n - val;
        if (complementTracker[val] || complementTracker[val] === 0) {
            complementTracker[val]; 
            unorderedAnswer = [val, complementTracker[val]];
            break;
        }
        if (!complementTracker[ComplementVal]) {
            complementTracker[ComplementVal] = val;
        }
       
    }
    let orderedAnswer = [];
    for (let j of ints) {
        if (unorderedAnswer && unorderedAnswer[0] === j) {
            orderedAnswer = unorderedAnswer;
            return orderedAnswer;
        }
        else if (unorderedAnswer && unorderedAnswer[1] == j) {
            swap(unorderedAnswer, 0, 1);
            orderedAnswer = unorderedAnswer;
            return orderedAnswer;
        }
    }
    return undefined;
}

sum_pairs_2nd( [10,5,2,3,7,5], 10); //?
