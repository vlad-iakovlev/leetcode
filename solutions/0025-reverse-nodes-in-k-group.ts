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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (!head) return null

    let next = head
    for (let i = 0; i < k - 1; i++) {
        next = next.next
        if (!next) return head
    }

    const newHead = reverseList(head, k, next.next)
    head.next = reverseKGroup(head.next, k)
    return newHead
}

function reverseList(head: ListNode, k: number, next: ListNode | null): ListNode | null {
    if (k <= 1) {
        head.next = next
        return head
    }

    const newHead = reverseList(head.next, k - 1, head)
    head.next = next
    return newHead
}
