/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const length = nums.length;

  const findInflationIndex = () => {
    let left = 0;
    let right = length - 1;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] > nums[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  };

  const binarySearch = (start, end) => {
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (nums[mid] < target) {
        start = mid + 1;
      } else if (nums[mid] > target) {
        end = mid - 1;
      } else {
        return mid;
      }
    }

    return -1;
  };

  const inflationIndex = findInflationIndex();

  return Math.max(
    binarySearch(0, inflationIndex - 1),
    binarySearch(inflationIndex, length - 1)
  );
};
