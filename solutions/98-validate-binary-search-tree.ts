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

function isValidBST(root: TreeNode | null, min = -1e10, max = 1e10): boolean {
    return (
        !root ||
        (
            root.val > min &&
            root.val < max &&
            isValidBST(root.left, min, root.val) &&
            isValidBST(root.right, root.val, max)
        )
    )
}
