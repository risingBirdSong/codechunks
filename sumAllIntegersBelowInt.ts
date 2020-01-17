
// 5. recursively sum all integers below a given integer.
function sumAllIntegersBelowInt(num: number) {
  if (num <= 0) {
    return num;
  }
  return num - 1 + sumAllIntegersBelowInt(num - 1);
}
