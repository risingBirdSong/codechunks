// 8. recursively determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
function powerOfTwo (num : number){
  if (num === 2){
    return true;
  }
  else if (num <= 1){
    return false;
  }
  else {
    num = num / 2;
    return powerOfTwo(num);
  }
} 
