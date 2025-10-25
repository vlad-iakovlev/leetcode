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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    let pi = 0

    function build(l: number, r: number): TreeNode | null {
        if (l === r) return null

        const val = preorder[pi++]
        const i = inorder.indexOf(val)

        return new TreeNode(val, build(l, i), build(i + 1, r))
    }

    return build(0, inorder.length)
}
