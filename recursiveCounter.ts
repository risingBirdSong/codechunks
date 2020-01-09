
function recursiveCounter (arr : any[]) : number {
    if (arr.length <= 1){
        return arr.length;
    }
    const rest = arr.slice(1);
    return 1 + recursiveCounter(rest);
}
