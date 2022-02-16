// 定义一个函数，输入一个链表的头节点，
// 反转该链表并输出反转后链表的头节点。
// 示例:

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let tankArr = []
  let tempHead = null
  while (head.next) {
    tankArr.push(head.val)
  }

  for (let i = tankArr.length - 1; i > 0; i--) {
    const ele = tankArr[i];
    if (i === tankArr.length - 1) {
      tempHead = new ListNode(ele)
    } else {
      tempHead.next = ele
    }
  }
  return tempHead
};