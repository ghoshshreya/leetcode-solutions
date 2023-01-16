// TWO POINTER APPROACH - Brute Force (O(n^2))
// var maxArea = function (height) {
//   let maxHeight = 0;
//   if (!height.length) return maxHeight;
//   if (height.length === 1) return height[0];
//   for (let x = 0; x < height.length - 1; x++) {
//     for (let z = x + 1; z < height.length; z++) {
//       let breadth = Math.min(height[x], height[z]);
//       area = (z - x) * breadth;
//       console.log(z, breadth);
//       maxHeight = Math.max(maxHeight, area);
//     }
//   }
//   return maxHeight;
// };

// TWO POINTER APPROACH
var maxArea = function (height) {
  if (!height.length) return maxHeight;
  if (height.length === 1) return height[0];
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left <= right) {
    area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, area);
    if (height[left] > height[right]) {
      right = right - 1;
    } else {
      left = left + 1;
    }
  }
  return maxArea;
};

console.log('maxArea', maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
