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

function getMinimumDifference(root: TreeNode | null): number {
    let min = 1e6
    let prev: TreeNode | null = null
    
    function traverse(node: TreeNode | null) {
        if (!node || min === 1) return
        traverse(node.left)
        if (prev) min = Math.min(min, Math.abs(node.val - prev.val))
        prev = node
        traverse(node.right)
    }

    traverse(root)

    return min
}
