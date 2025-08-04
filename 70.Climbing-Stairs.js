/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) {
    return n;
  }

  let prev = 1;
  let current = 2;

  for (let i = 2; i < n; i++) {
    const temp = current + prev;
    prev = current;
    current = temp;
  }

  return current;
};
