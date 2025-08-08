/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = [];

  if (!root) {
    return result;
  }

  const queue = [root];

  while (queue.length) {
    const length = queue.length;
    const row = [];

    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      row.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    result.push(row);
  }

  return result;
};
