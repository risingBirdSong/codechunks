function recursiveMax(arr: number[] , max  = 0) : number{
    if(arr.length <= 0){ return max}
    let first = arr.slice(0,1);
    let rest = arr.slice(1);
    if (first[0] > max){
        max = first[0];
    }
    return recursiveMax(rest, max);
}

recursiveMax([2,3,4,5,4,3,2]); //?
