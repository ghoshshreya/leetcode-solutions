// String will always be even
var isValid = function (s) {
  let stack = [];
  const paranthesisHashMap = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  for (x of s) {
    // 1. Traversing through the string
    // if we find a closing brace and its an empty stack, it means the string starts with an empty bracket which is invalid
    if (!paranthesisHashMap[x] && !stack.length) return false;
    // if we find a closing brace but there are values in the stack which means t could be a pair
    if (
      !paranthesisHashMap[x] &&
      paranthesisHashMap[stack[stack.length - 1]] === x
    ) {
      stack.pop();
    }
    // if its an opening brace
    else {
      stack.push(x);
    }
  }
  console.log(stack);
  return !!!stack.length;
};

console.log(isValid('([)]'));
