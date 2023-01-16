var threeSum = function (nums) {
  let threeSumArray = [];
  for (let x = 0; x < nums.length - 2; x++) {
    for (let y = x + 1; y < nums.length - 1; y++) {
      for (let z = y + 1; z < nums.length; z++) {
        if (nums[x] + nums[y] === -nums[z]) {
          threeSumArray.push([nums[x], nums[y], nums[z]]);
        }
      }
    }
  }
  return threeSumArray;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
