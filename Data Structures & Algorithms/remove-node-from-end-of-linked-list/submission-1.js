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

        const vHead = new ListNode(0,head);
        // fast = slow + n

        let slow =vHead,fast = vHead;

        for(let i=0;i<n;i++){
            fast = fast.next;
        }

        while(fast.next){
            fast =fast.next;
            slow= slow.next;
        }

        // remove slow.next
        slow.next = slow.next.next

        return vHead.next;
    }
}
