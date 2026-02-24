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

function insertionSortList(head: ListNode | null): ListNode | null {
  let curr = head;
  while (curr?.next) {
    const next = curr.next;

    if (next.val <= head.val) {
      curr.next = next.next;
      next.next = head;
      head = next;
    } else if (next.val >= curr.val) {
      curr = next;
    } else {
      let prev = head;
      while (next.val > prev.next.val) prev = prev.next;

      curr.next = next.next;
      next.next = prev.next;
      prev.next = next;
    }
  }

  return head;
}
