var compress = function (chars) {
  // let s = '';
  // let n = chars.length;
  // if (n > 0 && n > 1) {
  //   for (let x = 0; x < n; x++) {
  //     if (s.length === 0) {
  //       s = s + chars[x];
  //       s = s + '1';
  //     } //second last element of is same as curr element
  //     else if (s[s.length - 2] === chars[x]) {
  //       let count = Number(s[s.length - 1]) + 1;
  //       s = s.substring(0, s.length - 1) + count;
  //     } else {
  //       s = s + chars[x];
  //       s = s + '1';
  //     }
  //   }
  // } else {
  //   s = s + chars[0];
  // }
  // chars = s.split('');
  return chars + ' ------> ' + chars.length;
};

console.log(compress(['a', 'a', 'b', 'b', 'b', 'c', 'c']));
console.log(compress(['a']));
