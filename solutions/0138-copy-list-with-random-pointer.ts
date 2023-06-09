/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
    const dp = new Map<Node | null, Node | null>()
    dp.set(null, null)

    for (let node = head; node; node = node.next) {
        dp.set(node, new Node(node.val))
    }

    for (let node = head; node; node = node.next) {
        dp.get(node).next = dp.get(node.next)
        dp.get(node).random = dp.get(node.random)
    }

    return dp.get(head)
}
