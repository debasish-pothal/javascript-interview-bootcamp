/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const length = nums.length;

  const result = new Array(length).fill(1);
  const left = new Array(length).fill(1);

  for (let i = 1; i < length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  let right = 1;

  for (let i = length - 1; i >= 0; i--) {
    result[i] = left[i] * right;
    right = right * nums[i];
  }

  return result;
};
