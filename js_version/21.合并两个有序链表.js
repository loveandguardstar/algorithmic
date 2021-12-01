/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1) {
    return l2
  }

  if (!l2) {
    return l1
  }

  let dammy = new ListNode()
  let cur = dammy
  while(l1 && l2) {
    if (l1.val > l2.val) {
      cur.next = l2
      cur = cur.next
      l2 = l2.next
    } else {
      cur.next = l1
      cur = cur.next
      l1 = l1.next
    }
  }

  cur.next = l1 === null ? l2 : l1
  return dammy.next
};
// @lc code=end

