// didn't write, trying to understand it, only added types and ran it through the debugger to try to understand, and to keep for future use.


function combineWithoutRepetitions(comboOptions : number[], comboLength : number) {
  // If the length of the combination is 1 then each element of the original array
  // is a combination itself.
  if (comboLength === 1) {
    let returnMe = comboOptions.map(comboOption => [comboOption]);
    return returnMe;
  }

  // Init combinations array.
  const combos : number[][] = [];

  // Extract characters one by one and concatenate them to combinations of smaller lengths.
  // We need to extract them because we don't want to have repetitions after concatenation.
  comboOptions.forEach((currentOption : number, optionIndex : number) => {
    // Generate combinations of smaller size.
    const smallerCombos = combineWithoutRepetitions(
      comboOptions.slice(optionIndex + 1),
      comboLength - 1,
    );
    // Concatenate currentOption with all combinations of smaller size.
    smallerCombos.forEach((smallerCombo) => {
      combos.push([currentOption].concat(smallerCombo));
    });
  });

  return combos;
}
let ans = combineWithoutRepetitions([1,2,3,4], 3);
console.log(ans);
