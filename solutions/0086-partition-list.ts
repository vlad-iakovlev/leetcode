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

function partition(head: ListNode | null, x: number): ListNode | null {
    if (!head?.next) return head

    if (head.val < x) {
        head.next = partition(head.next, x)
        return head
    }

    let lastMin: ListNode | null
    let prev = head
    let curr = head.next
    
    while (curr) {
        if (curr.val < x) {
            if (!lastMin) {
                prev.next = curr.next
                curr.next = head
                lastMin = curr
                head = curr
                curr = prev.next
            } else {
                prev.next = curr.next
                curr.next = lastMin.next
                lastMin.next = curr
                lastMin = curr
                curr = prev.next
            }
        } else {
            prev = curr
            curr = curr.next
        }
    }

    return head
}
