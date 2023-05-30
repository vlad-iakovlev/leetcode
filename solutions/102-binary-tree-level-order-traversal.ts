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

function levelOrder(root: TreeNode | null): number[][] {
    const result: number[][] = []
    const deq = Array<[number, TreeNode | null]>([0, root])

    while (deq.length) {
        const [level, node] = deq.shift()

        if (node) {
            if (result[level]) result[level].push(node.val)
            else result[level] = [node.val]
            deq.push([level + 1, node.left], [level + 1, node.right])
        }
    }

    return result
}
