
// 7. recursively compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

function computeExponent(x: number, y: number, result : number = 0) {
  if (result === 0){
    result = x;
  }
  if (y === 1) {
    return result;
  }
  else {
    result = result * x;
    return computeExponent(x, --y, result);
  }
}

console.log(computeExponent(5, 4));
