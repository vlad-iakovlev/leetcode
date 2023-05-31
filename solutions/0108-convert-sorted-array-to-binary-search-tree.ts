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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    function genBST(l: number, r: number) {
        const m = Math.floor((l + r) / 2)

        return new TreeNode(
            nums[m],
            l < m ? genBST(l, m) : null,
            m + 1 < r ? genBST(m + 1, r) : null,
        )
    }

    return genBST(0, nums.length)
}
