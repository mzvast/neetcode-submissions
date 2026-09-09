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
     * @return {void}
     */
    reorderList(head) {
        // 拆成2半，前一半保持不变，后一半反转，然后交替合并（前一半在先）

        // find mid

        let vH = new ListNode();
        vH.next = head;

        let fast = vH,
            slow = vH;

        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        const tmp_r = slow.next;
        slow.next = null; // cut off left and right
        let l = head;

        // reverse right

        let r = reverse(tmp_r);

        function reverse(head) {
            const vHead = new ListNode();

            while (head) {
                const next = head.next;
                head.next = vHead.next;
                vHead.next = head;
                head = next;
            }

            return vHead.next;
        }

        let cnt = 0;

        const vHead = new ListNode();
        let cur = vHead;

        while (l || r) {
            cnt += 1;
            if (cnt % 2 == 1 && l) {
                cur.next = l;
                l = l.next;
            } else if (r) {
                cur.next = r;
                r = r.next;
            }
            cur = cur.next;
        }

        return vHead.next;
    }
}
