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

function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return true
    
    const deq = Array<[TreeNode | null, TreeNode | null]>([root.left, root.right])

    while (deq.length) {
        const [l, r] = deq.pop()
        if (!l && !r) continue
        if (!l || !r || l.val !== r.val) return false
        deq.push([l.left, r.right], [l.right, r.left])
    }

    return true
}
