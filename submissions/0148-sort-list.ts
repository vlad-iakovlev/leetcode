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

function sortList(head: ListNode | null): ListNode | null {
  if (!head?.next) return head;

  let slow = head;
  let fast = head.next;
  let prev = null;

  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const head2 = slow.next;
  slow.next = null;

  return merge(sortList(head), sortList(head2));
}

function merge(list1: ListNode | null, list2: ListNode | null) {
  const head = new ListNode();

  let curr = head;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }

    curr = curr.next;
  }

  curr.next = list1 ?? list2;

  return head.next;
}
