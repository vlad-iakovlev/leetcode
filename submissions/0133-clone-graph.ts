/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

function cloneGraph(root: Node | null): Node | null {
    if (!root) return null

    const dp = Array<Node>(101)

    function clone(node: Node): Node {
        if (!dp[node.val]) {
            dp[node.val] = new Node(node.val)
            dp[node.val].neighbors = node.neighbors.map(clone)
        }

        return dp[node.val]
    }

    return clone(root)
}
