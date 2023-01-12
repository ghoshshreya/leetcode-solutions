// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Longest Substring Without Repeating Characters
// var lengthOfLongestSubstring = function(s) {
//   let maxSubstringLength = 0;
//   if (s.length > 1) {
//     for (let x = 0; x < s.length - 1; x++) {
//       let substring = s[x];
//       for (let z = x + 1; z < s.length; z++) {
//         if (substring.indexOf(s[z]) !== -1) {
//           break;
//         } else {
//           substring = substring + s[z];
//         }
//       }
//       if (substring.length > maxSubstringLength) {
//         maxSubstringLength = substring.length;
//       }
//     }
//   } else {
//     maxSubstringLength = s.length;
//   }
//   return maxSubstringLength;
// };

// appDiv.innerHTML = lengthOfLongestSubstring(" ");

// BEST APPROACH

// var lengthOfLongestSubstring = function(s) {
//   // assuming s has always value
//   var subString = [];
//   var output = 0;
//   for(var i = 0; i < s.length; i++){
//       subString = createNewSubstring(subString, s[i]);
//       console.warn(subString)
//       output = subString.length > output ? subString.length : output;
//    }

//   return output;

// };

// var createNewSubstring = function(ss, c){
//   for(var i = 0; i < ss.length; i++){
//       if(ss[i] == c){
//           ss = ss.slice(i+1);
//           console.error(ss)
//           break;
//       }
//   }
//   console.log(c)
//   ss.push(c);
//   return ss;
// }

// appDiv.innerHTML = lengthOfLongestSubstring("abbdcaf");

// var isPalindrome = function(x) {
//     const input = x.toString();
//     if(input.length%2) { // odd array : 12321
//       let centralIndex = (Math.floor(input.length/2));
//       return isSame(input.substring(0,centralIndex), input.substring(centralIndex+1,input.length));
//     } else { // even array : 1221
//       let centralIndex = (Math.floor(input.length/2));
//       return isSame(input.substring(0,centralIndex), input.substring(centralIndex,input.length));
//     }

// };

// var isSame = function(inpt1,inpt2) {
//   return inpt1.split('').reverse().join('') === inpt2;
// }

// isPalindrome(1221);

var isPallindrome = function (x) {
  return x.toString().split('').reverse().join('') === x;
};

//longest pallindrome :: This approach exceeded time limit
// var longestPalindrome = function (s) {
//   let _longestPallindrome = '';
//   if (s.length > 2) {
//     // Exaple: aca -> aca, addadad --> dadad
//     for (let x = 0; x < s.length - 1; x++) {
//       let substring = s[x];
//       console.log(substring);
//       for (let z = x + 1; z < s.length; z++) {
//         substring = substring + s[z];
//         if (
//           isPallindrome(substring) &&
//           _longestPallindrome.length < substring.length
//         ) {
//           _longestPallindrome = substring;
//         }
//       }
//     }
//   } else if (s.length === 2 && isPallindrome(s)) {
//     // Example: bb --> bb
//     _longestPallindrome = s;
//   }
//   //Example: bad--> b, b-->b, ba-->b
//   return _longestPallindrome ? _longestPallindrome : s[0];
// };

// function isPallindrome(s) {
//   const reverse = s.toString().split('').reverse().join('');
//   if (reverse === s) return true;
//   return false;
// }

var longestPalindrome = function (s) {
  let result = '';
  let longestPallindromeLength = 0;
  for (let x = 0; x < s.length; x++) {
    //odd
    let [leftPointer, rightPointer] = [x, x];
    console.log(leftPointer, rightPointer);
    while (
      leftPointer >= 0 &&
      rightPointer < s.length &&
      s[leftPointer] === s[rightPointer]
    ) {
      if (rightPointer - leftPointer + 1 > longestPallindromeLength) {
        result = s.substring(leftPointer - 1, rightPointer + 1);
        console.log(result);
      }
      leftPointer -= leftPointer;
      rightPointer += rightPointer;
    }
  }
};

longestPalindrome('bab');
