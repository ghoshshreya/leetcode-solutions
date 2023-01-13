var longestCommonPrefix = function (strs) {
  if (strs.length === 1) return strs[0];
  strs = strs.sort();
  const compareWith = strs[0].split('');
  while (compareWith.length > 0) {
    for (let z = 1; z < strs.length; z++) {
      if (strs[z].indexOf(compareWith.join('')) !== 0) break;
      // Last element comparison
      if (z === strs.length - 1) {
        return compareWith.join('');
      }
    }
    compareWith.length = compareWith.length - 1;
  }
  return '';
};

console.log(longestCommonPrefix(['flwoer', 'flow']));
console.log(longestCommonPrefix(['flower', 'flow']));
console.log(longestCommonPrefix(['flower', 'flow', 'data']));
console.log(longestCommonPrefix(['flower']));
console.log(longestCommonPrefix(['']));
