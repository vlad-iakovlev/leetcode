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

function isPalindrome(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;
  let prev = null;
  let curr = head;
  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;

    curr.next = prev;
    prev = curr;
    curr = slow;
  }

  if (fast) slow = slow.next;

  while (slow) {
    if (slow.val !== prev.val) return false;
    slow = slow.next;
    prev = prev.next;
  }

  return true;
}
