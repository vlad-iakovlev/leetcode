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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    let pi = postorder.length - 1

    function build(l: number, r: number): TreeNode | null {
        if (l === r) return null

        const val = postorder[pi--]
        const i = inorder.indexOf(val)
        const right = build(i + 1, r)
        const left = build(l, i)

        return new TreeNode(val, left, right)
    }

    return build(0, inorder.length)
}
