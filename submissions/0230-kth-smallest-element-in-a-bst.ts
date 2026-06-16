/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function kthSmallest(root: TreeNode | null, k: number): number {
  if (!root) return 0;

  const stack: TreeNode[] = [];
  let node = root;
  for (let i = 0; i < k; i++) {
    while (node !== null) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop();
    if (i === k - 1) break;
    node = node.right;
  }

  return node.val;
}
