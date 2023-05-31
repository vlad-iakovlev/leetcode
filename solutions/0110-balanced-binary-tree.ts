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

function isBalanced(root: TreeNode | null): boolean {
    if (!root) return true
    if (Math.abs(getDepth(root.left) - getDepth(root.right)) > 1) return false
    return isBalanced(root.left) && isBalanced(root.right)
}

function getDepth(root: TreeNode | null): number {
    if (!root) return 0
    return Math.max(getDepth(root.left), getDepth(root.right)) + 1
}
