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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    const result: number[][] = []
    const item: number[] = []

    function traverse(node: TreeNode | null, target: number): void {
        if (!node) return
        item.push(node.val)
        if (!node.left && !node.right && node.val === target) result.push([...item])
        traverse(node.left, target - node.val)
        traverse(node.right, target - node.val)
        item.pop()
    }

    traverse(root, targetSum)

    return result
}
