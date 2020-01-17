
interface anyAmountOfNesting<T> extends Array<anyAmountOfNesting<T> | T> { }
function recursivelySumAnyAmountOfNestedNumbers<T>(inputs: anyAmountOfNesting<T>, sum: number = 0) {
  // check when inputs is empty to return the final sum
  if (inputs.length === 0) {
    console.log("its empty");
    return sum;
  }
  if (typeof inputs[0] === 'number') {
    let aNum = inputs[0];
    let sliced = inputs.slice(1);
    sum += aNum;
    return recursivelySumAnyAmountOfNestedNumbers(sliced, sum);
  }
  else if (inputs[0] instanceof Array) {
    let grabbed = inputs[0];
    inputs = inputs.slice(1);
    let arranged = [...grabbed, ...inputs];;
    return recursivelySumAnyAmountOfNestedNumbers(arranged, sum);
  }
}

console.log(recursivelySumAnyAmountOfNestedNumbers([[5, 6], [4], 2, 3, [1, [[4]]]]));
console.log(recursivelySumAnyAmountOfNestedNumbers([[[[[5]]]]]));
