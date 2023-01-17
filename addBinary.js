/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
  a = a.split('').reverse();
  b = b.split('').reverse();
  let carry = 0;
  let resultArr = [];
  let pointer = 0;
  let len = a.length > b.length ? a.length : b.length;
  while (pointer < len) {
    let a1 = a[pointer] ? a[pointer] : 0;
    let b1 = b[pointer] ? b[pointer] : 0;
    let sum = Number(carry) + Number(a1) + Number(b1);
    carry = Math.floor(sum / 2);
    resultArr.unshift(sum % 2);
    pointer++;
  }
  if (carry > 0) {
    resultArr.unshift(carry);
  }
  return resultArr.join('');
};

console.log(addBinary('111', '111'));
