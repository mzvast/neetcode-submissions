/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // fast  = slow + n

        const vHead = new ListNode();
        vHead.next = head;

        let fast = vHead, slow= vHead;

        while (n > 0) {
            n -= 1;
            fast = fast.next;
        }

        while (fast.next) {
            fast = fast.next;
            slow = slow.next;
        }

        slow.next = slow.next.next;

        return vHead.next;
    }
}
