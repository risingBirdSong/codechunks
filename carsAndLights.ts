
function mappingcarsandlights (str : string, times : number) {

    let lightLookup : {[key in justLights] : justLights} = {
        "G" : "O",
        "O" : "R",
        "R" : "G"
    }
    let clock = 0;
    let orangeOn = false;
    //index of O inner arr, and idx of outer arr;
    let orangeLooksUpIndx : {[key : number] : number} = {};
    let coveringGreen = false;
    let theIndexOfTheCover = 0;
    let theTurnGreenWasCovered = 0;
   let toArr = str.split("");
   let outer = new Array(times).fill(0); 
   return outer.map((val, idx, arr)=>{
        let movesLeft = 1;
        let innerMap = toArr.map((innerVal,i, theArr)=>{
            if (innerVal == "C" && i < theArr.length-1 && movesLeft > 0 && idx > 0 && theArr[i+1] == "."){
                i; //?
                innerVal = ".";
                theArr[i+1] = "C";
                movesLeft --;
            }
            if (clock > 0 && clock % 5 === 0 && (innerVal == "R" || innerVal == "G")) {
                innerVal = lightLookup[innerVal];
            }
            if (coveringGreen == true && idx != theTurnGreenWasCovered && i == theIndexOfTheCover-1) {
                theIndexOfTheCover; //?
                theArr[theIndexOfTheCover]; //?
                theArr[i+2] = "C";
                // and what happens if the green turns colors during this process?
                theArr[theIndexOfTheCover] = "G";
                coveringGreen = false;
                movesLeft --;
            }
            if(innerVal === "C" && theArr[i+1] === "G"){
                innerVal = ".";
                theArr[i+1] = "C";
                coveringGreen = true;
                theTurnGreenWasCovered = idx;
                theIndexOfTheCover = i+1;
                movesLeft --;
                
            }
            if (innerVal == "O" && !orangeLooksUpIndx[i]){
                orangeLooksUpIndx[i] = idx+1;
            }
            if (innerVal == "O" && orangeLooksUpIndx[i] != idx+1){
                clock = 0;
                innerVal = lightLookup[innerVal];
                delete orangeLooksUpIndx[i];
            }
        
       
            return innerVal;
        });
        clock ++;
        toArr = [...innerMap];
        return innerMap;
    })

}

mappingcarsandlights("C..R...G...",15) //?
