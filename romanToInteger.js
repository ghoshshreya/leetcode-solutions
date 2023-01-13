var romanNumerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

// STRAIGHT FORWRD APPROACH
var _romanToInt = function (s) {
  let intNum = 0;
  for (let x = 0; x < s.length; x++) {
    let currVal = romanNumerals[s[x]];
    let nextVal = romanNumerals[s[x + 1]];
    if (!nextVal) {
      intNum = intNum + currVal;
      break;
    }
    if (currVal < nextVal) intNum = intNum - currVal;
    else intNum = intNum + currVal;
  }
  return intNum;
};

console.log('Roman To Integer, My Approach :: ', _romanToInt('XIV'));

var romanToInt = function (s) {
  function recursiveApproach(currentIndex) {
    let firstVal = romanNumerals[s[currentIndex]];
    let nextVal = romanNumerals[s[currentIndex + 1]];
    if (!nextVal) return firstVal; // Last element or only element
    if (romanNumerals[firstVal] < romanNumerals[nextVal])
      return (firstVal = -firstVal + recursiveApproach(currentIndex + 1));
    else return firstVal + recursiveApproach(currentIndex + 1);
  }
  return recursiveApproach(0);
};

console.log(
  'Roman To Integer, Better Approach With Recursion :: ',
  romanToInt('III')
);

// Better approach since in roman numbers there cannot be two small numbers before a large one --> line 65-55 optimizes the code
var romanToInt3 = function (s) {
  let finalNumber = 0;
  let i = 0;
  while (i < s.length) {
    const charVal = romanNumerals[s[i]];
    const nextCharVal = romanNumerals[s[i + 1]];
    if (charVal < nextCharVal) {
      finalNumber = finalNumber + nextCharVal - charVal;
      i = i + 2;
    } else {
      finalNumber = finalNumber + charVal;
      i = i + 1;
    }
  }
  return finalNumber;
};

console.log('Roman To Integer, Approach 3 :: ', romanToInt3('III'));
