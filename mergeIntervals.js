// TODO
var merge = function (intervals) {
  const overlappingIntervals = [];
  let x = 0;
  while (x < intervals.length) {
    if (
      intervals[x + 1] &&
      ((intervals[x][0] <= intervals[x + 1][1] &&
        intervals[x][1] >= intervals[x + 1][0]) ||
        (intervals[x][0] >= intervals[x + 1][1] &&
          intervals[x][1] <= intervals[x + 1][0]))
    ) {
      overlappingIntervals.push([
        Math.min(intervals[x][0], intervals[x + 1][0]),
        Math.max(intervals[x][1], intervals[x + 1][1]),
      ]);
    } else {
      overlappingIntervals.push([intervals[x][0], intervals[x][1]]);
    }
    x = x + 1;
  }
  return overlappingIntervals;
};

console.log(
  merge([
    [1, 4],
    [0, 2],
    [3, 5],
  ])
);
