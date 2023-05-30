function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, extra = 0): ListNode | null {
    if (!l1 && !l2 && !extra) return null

    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + extra

    return new ListNode(
        sum % 10,
        addTwoNumbers(l1?.next, l2?.next, Math.floor(sum / 10))
    )
}
