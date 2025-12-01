import { ListNode } from './interface/ListNode'

type Nullable<T> = T | null

// the middle node or first middle node
function middle(head: Nullable<ListNode>) {
  if (!head)
    return null
  let slow: Nullable<ListNode> = head
  let fast: Nullable<ListNode> = head.next
  while (fast && fast.next) {
    // `slow` is slower than `fast`, so must not null
    slow = slow!.next
    fast = fast.next.next
  }
  return slow
}

function merge(l1: Nullable<ListNode>, l2: Nullable<ListNode>) {
  const result = new ListNode()
  let [p, q, r] = [l1, l2, result]
  while (p && q) {
    if (p.val < q.val)
      [r.next, p, r] = [p, p.next, p]
    else
      [r.next, q, r] = [q, q.next, q]
  }
  r.next = p || q
  return result.next
}

export function sortList(head: Nullable<ListNode>): Nullable<ListNode> {
  // array with <= 1 element is sorted
  if (!head || !head.next)
    return head
  const lmid = middle(head)
  const rmid = lmid!.next
  lmid!.next = null
  const left = sortList(head)
  const right = sortList(rmid)
  return merge(left, right)
}
