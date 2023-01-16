// Two Sum Using Hash Map
var twoSumTwo = function (nums, target) {
  let map = new Map();
  if (!nums.length) return [];
  for (let x = 0; x < nums.length; x++) {
    const val = target - nums[x];
    if (map.get(val) !== undefined) {
      return [map.get(val) + 1, x + 1];
    }
    map.set(nums[x], x);
  }
};

console.log(twoSumTwo([2, 3, 4, 5], 7));

// Two Sum Using To Pointers :: Works for sorted arrays
var twoSumTwoSorted = function (nums, target) {
  if (!nums.length) return [];
  if (nums.length < 2) return nums;
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let sum = nums[low] + nums[high];
    if (target === sum) return [low + 1, high + 1];
    else if (target < sum) high = high - 1;
    else low = low + 1;
  }
};

console.log(twoSumTwoSorted([2, 3, 4, 5].sort(), 7));
