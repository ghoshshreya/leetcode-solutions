function stringCompression(arr) {
  let s = '';
  let n = arr.length;
  for (let x = 0; x < n; x++) {
    if (s.length === 0) {
      s = s + arr[x];
      s = s + '1';
    } //second last element of is same as curr element
    else if (s[s.length - 2] === arr[x]) {
      let count = Number(s[s.length - 1]) + 1;
      s = s.substring(0, s.length - 1) + count;
    } else {
      s = s + arr[x];
      s = s + '1';
    }
  }
  return s.length;
}
console.log('Hello');
stringCompression([]);
