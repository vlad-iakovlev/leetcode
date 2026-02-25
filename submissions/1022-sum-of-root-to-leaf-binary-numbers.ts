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

function sumRootToLeaf(root: TreeNode | null): number {
  function dfs(node: TreeNode | null, value: number): number {
    if (!node) return 0;

    value = value * 2 + node.val;

    if (!node.left && !node.right) return value;

    return dfs(node.left, value) + dfs(node.right, value);
  }

  return dfs(root, 0);
}
