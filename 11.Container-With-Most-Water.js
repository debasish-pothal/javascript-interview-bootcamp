/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let area = 0;
  let start = 0;
  let end = height.length - 1;

  while (start < end) {
    const w = end - start;
    const h = Math.min(height[start], height[end]);

    const currentArea = w * h;
    area = Math.max(area, currentArea);

    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }

  return area;
};
