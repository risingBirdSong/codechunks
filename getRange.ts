// 6. recursively get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]

function getRange(x: number, y: number, result: number[] = []) {
  if (x >= y) {
    return result
  }
  else {
    result.push(x);
    return getRange(++x, y, result);
  }
}

console.log(getRange(5, 10));
