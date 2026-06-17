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

function binaryTreePaths(root: TreeNode | null): string[] {
  const paths: string[] = [];

  function dfs(node: TreeNode | null, path: string) {
    if (!node) return;
    if (!node.left && !node.right) paths.push(`${path}${node.val}`);
    if (node.left) dfs(node.left, `${path}${node.val}->`);
    if (node.right) dfs(node.right, `${path}${node.val}->`);
  }
  dfs(root, "");

  return paths;
}
