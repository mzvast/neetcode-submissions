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
        // split into 2 half

        const vHead = new ListNode(0, head);

        let fast = vHead,
            slow = vHead;

        while(fast&&fast.next){
            fast = fast.next.next;
            slow=slow.next;
        }
        const l = head;
        const r = slow.next;
        slow.next = null; // cut off

        // reverse r

        function reverse(head){
            const vHead = new ListNode();

            let cur = head;
            while(cur){
                const next = cur.next;
                cur.next = vHead.next;
                vHead.next = cur;
                cur = next;
            }
            return vHead.next;
        }

        const revR = reverse(r);

        // do merge, l first

        let dir = 0,p = l,q = revR;

        const vHeadAns = new ListNode();

        let cur = vHead;

        while(p||q){
            if(!q){
                cur.next = p;
                break;
            }else if(!p){
                cur.next = q;
                break;
            }else if(dir===0){
                cur.next = p;
                p = p.next;
                cur = cur.next;
                dir=1;
            }else {
                cur.next = q;
                q=q.next;
                cur= cur.next;
                dir=0;
            }
        }

        return vHeadAns.next;
    }
}
