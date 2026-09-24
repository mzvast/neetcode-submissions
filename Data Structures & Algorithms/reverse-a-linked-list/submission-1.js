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
     * @return {ListNode}
     */
    reverseList(head) {
        const vHead = new ListNode();
        // head->a->b->c
        // vhead-> new node ->tail
        let cur = head;

        while (cur) {
            const next = cur.next;

            cur.next = vHead.next;
            vHead.next = cur;

            cur = next;
        }

        return vHead.next;
    }
}
