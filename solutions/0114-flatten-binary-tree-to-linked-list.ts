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

function flatten(root: TreeNode | null): void {
    let prev: TreeNode | null = null

    function traverse(node: TreeNode | null): void {
        if (!node) return
        traverse(node.right)
        traverse(node.left)
        node.right = prev
        node.left = null
        prev = node
    }

    traverse(root)
}
