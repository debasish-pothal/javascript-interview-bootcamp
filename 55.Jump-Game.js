/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const n = nums.length;
  const result = new Array(n).fill(false);
  result[0] = true;

  for (let j = 1; j < n; j++) {
    for (let i = 0; i < j; i++) {
      if (result[i] && i + nums[i] >= j) {
        result[j] = true;
        break;
      }
    }
  }

  return result[n - 1];
};
