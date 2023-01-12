// Pallindrome
var isPalindrome = function (x) {
  const input = x.toString();
  if (input.length % 2) {
    // odd array : 12321
    let centralIndex = Math.floor(input.length / 2);
    return isSame(
      input.substring(0, centralIndex),
      input.substring(centralIndex + 1, input.length)
    );
  } else {
    // even array : 1221
    let centralIndex = Math.floor(input.length / 2);
    return isSame(
      input.substring(0, centralIndex),
      input.substring(centralIndex, input.length)
    );
  }
};

var isSame = function (inpt1, inpt2) {
  return inpt1.split('').reverse().join('') === inpt2;
};

// Single line pallindrome
var isPallindrome2 = function (x) {
  return x.toString().split('').reverse().join('') === x;
};

function runPallindrome() {
  console.log('Approach 1, Pallindrome -- ', isPalindrome(1221));
  console.log('Approach 2, isPallindrome2 -- ', isPalindrome(1221));
}

runPallindrome();
