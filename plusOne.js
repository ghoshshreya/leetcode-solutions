let plusOne = function (nums) {
  let add = 1; // initial 1 to be added, later used to hold carry
  let currIndex = nums.length - 1; // Starting from last index
  while (currIndex >= 0) {
    nums[currIndex] = nums[currIndex] + add;
    if (nums[currIndex] >= 10) {
      nums[currIndex] = nums[currIndex] % 2;
      console.log(nums[currIndex]);
      add = 1;
    } else {
      add = 0;
      break;
    }
    currIndex = currIndex - 1;
  }
  if (add) nums.unshift(1);
  return nums;
};

console.log(plusOne([1]));
console.log(plusOne([1, 2, 3]));
console.log(plusOne([9, 9]));
