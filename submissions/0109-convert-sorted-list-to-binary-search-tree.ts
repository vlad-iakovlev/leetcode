/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

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

function sortedListToBST(head: ListNode | null): TreeNode | null {
    const nodes: TreeNode[] = []

    while (head) {
        nodes.push(new TreeNode(head.val))
        head = head.next
    }

    function genBST(l: number, r: number) {
        if (l >= r) return null
        const m = Math.floor((l + r) / 2)
        const node = nodes[m]
        node.left = genBST(l, m)
        node.right = genBST(m + 1, r)
        return node
    }

    return genBST(0, nodes.length)
}
