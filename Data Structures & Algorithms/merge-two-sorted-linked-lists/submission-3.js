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
        const vHead = new ListNode();
        let cur = vHead;

        while(list1 || list2){
            if(!list1){
                cur.next = list2;
                list2 = null;
            }
            else if(!list2){
                cur.next = list1;
                list1 = null;
            } else if(list1.val<=list2.val){
                cur.next = list1;
                list1 = list1.next;
                cur = cur.next;
            }else{
                cur.next = list2;
                list2 = list2.next;
                cur= cur.next;
            }
        }

        return vHead.next;
    }
}
