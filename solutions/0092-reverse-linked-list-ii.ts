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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (left === right) return head

    if (left > 1) {
        head.next = reverseBetween(head.next, left - 1, right - 1)
        return head
    }

    while (left < right) {
        let curr = head
        for (let i = left; i < right; i++) curr = curr.next
        const next = head.next
        head.next = curr.next
        curr.next = head
        head = next
        right--
    }

    return head
}
