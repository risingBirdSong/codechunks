// 11. recursively write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

function moduloRemake (x : number, y : number, accumulater : number = 0) {
  if (x < y){
    return "call with y greater than x";
  }
  else if (y + accumulater < x){
    accumulater += y;
    return moduloRemake(x,y,accumulater);
  }
  else if (y + accumulater == x){
    return 0;
  }
  else return x - accumulater;
}
