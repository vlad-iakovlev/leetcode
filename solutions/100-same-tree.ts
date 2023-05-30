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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const deq = Array<[TreeNode | null, TreeNode | null]>([p, q])

    while (deq.length) {
        const [p, q] = deq.pop()
        if (!p && !q) continue
        if (!p || !q || p.val !== q.val) return false
        deq.push([p.left, q.left], [p.right, q.right])
    }

    return true
}
