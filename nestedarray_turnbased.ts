function  mapNumbersTest (arr : number[], times : number) {
    let outer = [[...arr]];
    
    for (let i = 0; i < times; i ++) {
        let movesLeftThisTurn = 1;
        outer.push(arr.map((x,i, thearr)=>{
            if (x === 1 && i < thearr.length-1 && movesLeftThisTurn === 1){
                thearr[i+1] = 1;
                x = 0;
                movesLeftThisTurn; //?
                movesLeftThisTurn--;
            }
            return x;
        }))
        let makeDeepCopy = [...outer[outer.length-1]]
        arr = makeDeepCopy;
        let stop = true;
    }
    return outer;
}


console.log(mapNumbersTest([1,0,0,0,0,0], 4));
