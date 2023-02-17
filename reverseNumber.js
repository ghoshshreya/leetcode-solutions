var reverse = function (x) {
  if (x > 9 || x < -9) {
    // Double digit numbers then only reverse
    let isNegative = x < 0;
    let reverse = isNegative
      ? Number(x.toString().replace('-', '').split('').reverse().join('')) * -1
      : Number(x.toString().split('').reverse().join(''));
    if (reverse > 2147483647 || reverse < -2147483648) {
      // using value to avoid calc : Math.pow(2, 31) - 1 and Math.pow(2,31) * -1
      return 0;
    }
    return reverse;
  }
  return x;
};

console.log(reverse(-123));
