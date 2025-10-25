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

function generateTrees(n: number): Array<TreeNode | null> {
    return generate(1, n)
}

function generate(l: number, r: number): Array<TreeNode | null> {
    if (l > r) return [null]

    const result: Array<TreeNode | null> = []

    for (let i = l; i <= r; i++) {
        const lls = generate(l, i - 1)
        const rrs = generate(i + 1, r)

        for (const ll of lls)
        for (const rr of rrs) result.push(new TreeNode(i, ll, rr))
    }

    return result
}
