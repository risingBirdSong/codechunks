
function recursiveAdd (nums : number[]) : number{
   if (nums.length == 1){
        return nums[0];
   }
    const first = nums.slice(0,1) //?
    const rest = nums.slice(1); //?
    return first[0] + recursiveAdd(rest);
}

recursiveAdd([4,12,3,10]); //?
