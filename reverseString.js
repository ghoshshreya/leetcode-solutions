function reverseString(str) {
  if (str === null || str.length <= 0) return '';
  if (str.length === 1) return str;
  str = str.split('');
  for (let i = 0; i <= Math.floor(str.length / 2) - 1; i++) {
    j = str.length - i - 1;
    let temp = str[j];
    str[j] = str[i];
    str[i] = temp;
  }
  return str.join('');
}

console.log(reverseString('a'));
