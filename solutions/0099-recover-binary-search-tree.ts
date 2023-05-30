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

function recoverTree(root: TreeNode | null): void {
    let first: TreeNode | null = null
    let second: TreeNode | null = null
    let prev = new TreeNode(-Infinity)

    function traverse(root: TreeNode | null): void {
        if (!root) return
        
        traverse(root.left)

        if (prev.val >= root.val) {
            if (!first) first = prev
            second = root
        }
        prev = root

        traverse(root.right)
    }

    traverse(root)
    const val = first.val
    first.val = second.val
    second.val = val
}
