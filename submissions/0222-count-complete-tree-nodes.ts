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

function countNodes(root: TreeNode | null): number {
  if (!root) return 0;

  let leftDepth = getDepth(root.left);
  let rightDepth = getDepth(root.right);

  if (leftDepth === rightDepth) {
    return 2 ** leftDepth + countNodes(root.right);
  } else {
    return 2 ** rightDepth + countNodes(root.left);
  }
}

function getDepth(node: TreeNode | null): number {
  let depth = 0;

  while (node) {
    node = node.left;
    depth++;
  }

  return depth;
}
