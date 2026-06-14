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

function pairSum(head: ListNode | null): number {
  let slow = head;
  let fast = head;
  let prev: ListNode | null = null;

  while (fast?.next) {
    fast = fast.next.next;
    const next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  let res = 0;
  while (slow) {
    res = Math.max(res, prev.val + slow.val);
    prev = prev.next;
    slow = slow.next;
  }

  return res;
}
