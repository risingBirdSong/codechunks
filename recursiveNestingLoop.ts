//messing around with this here, very interesting but still mysterious
//https://stackoverflow.com/questions/31979661/trying-to-convert-nested-loop-to-recursive-function

function recursiveLoop (len : number, end : number, start : number) {
  const data : number[] = [];
  const holder : number[][] = [];

  function loop (start : number, index : number){
    if (index === end){
      let copy = [...data];
      holder.push(copy);
      return;
    }
    for (let i = start; i < len; i ++){
      data[index] = i;
      loop(i+1, index+1);
    }
  }
  loop(start, start);
  return holder;
}

console.log(recursiveLoop(6,5,0))
