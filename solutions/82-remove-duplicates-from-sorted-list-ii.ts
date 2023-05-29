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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) return head

    if (head.val === head.next?.val) {
        while (head.val === head.next?.val) {
            head = head.next
        }

        return deleteDuplicates(head.next)
    }

    head.next = deleteDuplicates(head.next)
    return head
}
