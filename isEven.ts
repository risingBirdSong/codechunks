//recursively determine even or odd

function isEven(num: number) {
  console.log(num);
  if (num === 1) {
    return false;
  }
  else if (num === 2) {
    return true;
  }
  return isEven(num - 2);
}
