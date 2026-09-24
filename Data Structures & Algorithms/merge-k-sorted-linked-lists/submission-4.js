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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        const vHead = new ListNode();
        let cur = vHead;

        class MinHeap {
            constructor() {
                this.data = [null];
                this.cmp = (i, j) => this.data[i].val < this.data[j].val;
            }

            size() {
                return this.data.length - 1;
            }
            swap(i, j) {
                [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
            }

            insert(x) {
                this.data.push(x);
                this.swim();
            }

            remove() {
                this.swap(1, this.data.length - 1);
                const ret = this.data.pop();
                this.sink();
                return ret;
            }

            swim() {
                let idx = this.data.length - 1;
                while (true) {
                    let pid = idx >> 1;
                    if (pid > 0 && this.cmp(idx, pid)) {
                        this.swap(idx, pid);
                        idx = pid;
                    } else break;
                }
            }

            sink() {
                let idx = 1;
                while (idx * 2 < this.data.length) {
                    const leftIdx = idx * 2,
                        rightIdx = leftIdx + 1;
                    let tmp = idx;
                    if (this.cmp(leftIdx, tmp)) tmp = leftIdx;
                    if (rightIdx < this.data.length && this.cmp(rightIdx, tmp)) tmp = rightIdx;
                    if (idx === tmp) break;
                    this.swap(idx, tmp);
                    idx = tmp;
                }
            }
        }

        const h = new MinHeap();

        for (let list of lists) {
            list && h.insert(list);
        }

        while (h.size()) {
            const ret = h.remove();
            if (ret.next) h.insert(ret.next);
            cur.next = ret;
            cur = cur.next;
        }

        return vHead.next;
    }
}
