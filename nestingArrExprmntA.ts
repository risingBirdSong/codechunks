function  mapNumbersTest (arr : number[], times : number) {
  let outer = new Array(times).fill(0);
    return outer.map((x,idx,thearr)=>{
        return thearr.map((y, i, innerarr)=>{
            return y = idx;
        })
    })
}
