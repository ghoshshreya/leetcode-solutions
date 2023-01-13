var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  strs = strs.sort(); // TO GET STRING WITH SMALLEST LENGTH ON THE FIRST FOR COMPARISON
  const firstWord = strs[0]; //flow
  const lastWord = strs[strs.length - 1]; //flower
  const resultArray = [];
  for (let x = 0; x < firstWord.length; x++) {
    if (firstWord[x] !== lastWord[x]) break;
    resultArray.push(firstWord[x]);
  }
  return resultArray.join('');
};

console.log(longestCommonPrefix(['flwoer', 'flow']));
console.log(longestCommonPrefix(['flower', 'flow']));
console.log(longestCommonPrefix(['flower', 'flow', 'data']));
console.log(longestCommonPrefix(['flower']));
console.log(longestCommonPrefix(['']));
