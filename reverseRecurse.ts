// 9. recursively write a function that reverses a string.
function reverseRecurse (str : string, operations : number = 0) {
  let arrayed = str.split("");
  if (operations == Math.round(str.length / 2)){
    return arrayed.join("");
  }
  else {
    let swapped = swap(arrayed, operations, arrayed.length -operations-1).join("");
    operations++;
    return reverseRecurse(swapped, operations);
  }
}

function swap (arr : any[], a : any, b : any){
  console.log(arr);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
}
