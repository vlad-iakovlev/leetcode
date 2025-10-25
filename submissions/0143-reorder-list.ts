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
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    if (!head) return

    let slow = head
    let fast = head?.next
    while (fast?.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let prev = null
    let curr = slow.next
    while (curr) {
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    slow.next = null

    let h1 = head
    let h2 = prev
    while (h2) {
        const next = h1.next
        h1.next = h2
        h1 = h2
        h2 = next
    }
}
