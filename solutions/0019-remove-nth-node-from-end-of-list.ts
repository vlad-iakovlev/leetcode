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

function removeNthFromEnd(
    head: ListNode | null,
    n: number
): ListNode | null {
    return removeNthFronEndInternal(head, n).head
}

function removeNthFronEndInternal(
    head: ListNode | null,
    n: number
): { nthFronEnd: number, head: ListNode | null} {
    if (!head) return { nthFronEnd: 0, head }

    const next = removeNthFronEndInternal(head.next, n)
    if (next.nthFronEnd + 1 === n) head = next.head
    else head.next = next.head

    return { nthFronEnd: next.nthFronEnd + 1, head }
}
