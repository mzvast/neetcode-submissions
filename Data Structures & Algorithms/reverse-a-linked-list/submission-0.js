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
        // head->x->y
        const vHead = new ListNode(); // vHead->oldHead
        while(head){
            const next = head.next;
            head.next= vHead.next;
            vHead.next= head;
            head = next;
        }

        return vHead.next;
    }
}
