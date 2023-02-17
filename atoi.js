// https://leetcode.com/problems/string-to-integer-atoi/
var myAtoi = function (s) {
  s = s.replaceAll(' ', ''); //removed white spaces
  let arr = s.split('');
  let isNegative = s.startsWith('-');
  if (s.startsWith('-') || s.startsWith('+')) {
    s = s.replace(s[0], '');
  }
  let numString = '0';
  for (let x = 0; x < s.length; x++) {
    if (Number(s[x]).toString() !== 'NaN') {
      console.log(s[x], Number(s[x]).toString());
      numString = numString + Number(s[x]);
    }
  }

  return isNegative ? Number(numString) * -1 : Number(numString);
};

console.log(myAtoi('1 Hello- 23'));
