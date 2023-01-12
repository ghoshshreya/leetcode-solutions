// Longest Substring Without Repeating Characters
var lengthOfLongestSubstring = function (s) {
  let maxSubstringLength = 0;
  if (s.length > 1) {
    for (let x = 0; x < s.length - 1; x++) {
      let substring = s[x];
      for (let z = x + 1; z < s.length; z++) {
        if (substring.indexOf(s[z]) !== -1) {
          break;
        } else {
          substring = substring + s[z];
        }
      }
      if (substring.length > maxSubstringLength) {
        maxSubstringLength = substring.length;
      }
    }
  } else {
    maxSubstringLength = s.length;
  }
  return maxSubstringLength;
};

console.log(
  'Approach 1, Longest substring without repeating characters -- ',
  lengthOfLongestSubstring(' ')
);

// BEST APPROACH - Longest Substring Without Repeating Characters
var lengthOfLongestSubstring2 = function (s) {
  // assuming s has always value
  var subString = [];
  var output = 0;
  for (var i = 0; i < s.length; i++) {
    subString = createNewSubstring(subString, s[i]);
    output = subString.length > output ? subString.length : output;
  }
  return output;
};

var createNewSubstring = function (ss, c) {
  for (var i = 0; i < ss.length; i++) {
    if (ss[i] == c) {
      ss = ss.slice(i + 1);
      break;
    }
  }
  ss.push(c);
  return ss;
};

console.log(
  'Approach 2, Longest substring without repeating characters -- ',
  lengthOfLongestSubstring2(' ')
);
