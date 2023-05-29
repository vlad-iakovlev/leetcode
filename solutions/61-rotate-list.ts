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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head) return head

    let h = head
    let len = 0
    for (; h; h = h.next) len++
    k = len - k % len

    let tail = head
    for (let i = 1; i < k; i++) head = head.next

    h = head
    while (h.next) h = h.next
    h.next = tail

    h = head.next
    head.next = null

    return h
}
