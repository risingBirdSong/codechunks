
// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
function multiplty (x : number, y : number, acc : number=0){
  if (y <= 0){
    return acc;
  }
  else {
    acc += x;
    y --;
    return multiplty(x,y,acc);
  }
}

console.log(multiplty(10,6));

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
function divide (x : number, y : number, acc : number = 0){
  if (x <= 0){
    return acc;
  }
  else {
    acc += 1;
    x = x -y;
    return divide(x, y, acc);
  }
}

console.log(divide(100,3));
