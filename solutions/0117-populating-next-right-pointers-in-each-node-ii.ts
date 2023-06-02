/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
    function traverse(nodes: Array<Node | null>) {
        nodes = nodes.filter(Boolean)
        if (!nodes.length) return

        const nextNodes: Array<Node | null> = []

        for (let i = 0; i < nodes.length; i++) {
            nodes[i].next = nodes[i + 1] ?? null
            nextNodes.push(nodes[i].left, nodes[i].right)
        }

        traverse(nextNodes)
    }

    traverse([root])

    return root
}
