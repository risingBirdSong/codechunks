function  mapNumbersTest (arr : number[], times : number) {
  let outer = new Array(times).fill(0);
  return outer.map((x,idx,thearr)=>{
    let movesLeft = 1;
        let innermap =  arr.map((y, i, innerarr)=>{
            if (y == 1 && i < innerarr.length-1 && movesLeft > 0){
                innerarr[i+1] = 1;
                movesLeft --;
                y = 0;
            }
            return y;
        })
        arr = [...innermap];
        return innermap;
    })
}
