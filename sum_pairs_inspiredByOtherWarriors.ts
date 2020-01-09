function sum_pairs_otherWarrior_A (ints : number[], s : number) {
    let seen : any = {};
    for(let val of ints){
        if (seen[s - val] == true){
            return [s - val, val]
        }
        seen[val] = true;
    }
}

sum_pairs_otherWarrior_A([10,5,2,3,7,5], 10); //?

function sum_pairs_otherWarrior_B (ints : number[], s : number) {
    const seen = new Set();
    for (let val of ints){
        if (seen.has(val)){
            return [s-val, val];
        }
        seen.add(s - val);
    }    
}

sum_pairs_otherWarrior_B([10,5,2,3,7,5], 10); //?
