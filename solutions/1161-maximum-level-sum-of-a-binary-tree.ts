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

function maxLevelSum(root: TreeNode | null): number {
    const dp: number[] = []

    function dfs(node: TreeNode | null, level: number): void {
        if (!node) return

        dp[level] = (dp[level] ?? 0) + node.val

        dfs(node.left, level + 1)
        dfs(node.right, level + 1)
    }

    dfs(root, 0)

    return dp.indexOf(Math.max(...dp)) + 1
}
