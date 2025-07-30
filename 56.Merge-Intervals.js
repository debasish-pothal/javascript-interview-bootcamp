/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const topInterval = result[result.length - 1];

    if (topInterval[1] >= currentInterval[0]) {
      topInterval[1] = Math.max(topInterval[1], currentInterval[1]);
    } else {
      result.push(currentInterval);
    }
  }

  return result;
};
