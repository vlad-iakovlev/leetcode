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

function sumNumbers(root: TreeNode | null): number {
    if (!root) return 0

    let result = 0

    function traverse(node: TreeNode, num: number) {
        num = num * 10 + node.val
        
        if (!node.left && !node.right) {
            result += num
        } else {
            if (node.left) traverse(node.left, num) 
            if (node.right) traverse(node.right, num)
        }
    }

    traverse(root, 0)

    return result
}
