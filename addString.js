var addStrings = function (num1, num2) {
  num1 = num1.split('').reverse();
  num2 = num2.split('').reverse();
  let resutArr = [];
  let len = Math.max(num1.length, num2.length);
  let pointer = 0;
  let carry = 0;
  while (pointer < len) {
    num1[pointer] = num1[pointer] ? num1[pointer] : 0;
    num2[pointer] = num2[pointer] ? num2[pointer] : 0;
    console.l;
    let sum = Number(carry) + Number(num1[pointer]) + Number(num2[pointer]);
    if (sum >= 10) {
      carry = 1;
      sum = sum % 10;
    } else carry = 0;
    resutArr.unshift(sum);
    pointer++;
  }

  if (carry) {
    resutArr.unshift(carry);
  }

  return resutArr.join('');
};

console.log(addStrings('999', '123'));
