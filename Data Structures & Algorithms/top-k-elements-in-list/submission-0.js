class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        class MaxHeap {
            constructor() {
                this.data = [null];// [num,cnt]
                this.less = (i, j) => this.data[i][1] > this.data[j][1];
            }

            size() {
                return this.data.length - 1;
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

            sink() {
                let idx = 1;
                while (2 * idx < this.data.length) {
                    let leftIdx = 2 * idx,
                        rightIdx = leftIdx + 1;
                    let tmp = idx;
                    if (this.less(leftIdx, tmp)) tmp = leftIdx;
                    if (rightIdx < this.data.length && this.less(rightIdx, tmp)) tmp = rightIdx;
                    if (tmp === idx) break;
                    this.swap(tmp, idx);
                    idx = tmp;
                }
            }

            swim() {
                let idx = this.data.length - 1;
                while (true) {
                    let pid = idx >> 1;
                    if (pid > 0 && this.less(idx, pid)) {
                        this.swap(idx, pid);
                        idx = pid;
                    } else {
                        break;
                    }
                }
            }

            swap(i, j) {
                [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
            }
        }

        const h = new MaxHeap();

        const d = new Map();

        for (let num of nums) {
            if (!d.has(num)) d.set(num, 1);
            else d.set(num, d.get(num) + 1);
        }

        for (let [num, cnt] of d) {
            h.insert([num, cnt]);
        }

        const ans = [];

        for (let i = 0; i < k; i++) {
            ans.push(h.remove()[0]);
        }

        return ans;
    }
}
