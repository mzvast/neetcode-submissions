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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // vhead

        const vHead = new ListNode();

        let cur = vHead;

        while (list1 || list2) {
            if (list1 && list2) {
                if (list1.val <= list2.val) {
                    const next = list1.next;

                    cur.next = list1;
                    //list1.next = null;
                    list1 = next;
                } else {
                    const next = list2.next;

                    cur.next = list2;
                    //list2.next = null;
                    list2 = next;
                }
                cur = cur.next;
            } else if (list1) {
                cur.next = list1;
                list1 = null;
            } else {
                cur.next = list2;
                list2 = null;
            }
            
        }

        return vHead.next;
    }
}
