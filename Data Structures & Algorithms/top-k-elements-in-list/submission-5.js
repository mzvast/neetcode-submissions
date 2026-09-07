class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // count as map

        const h = new Map();

        for (let num of nums) {
            if (!h.has(num)) h.set(num, 1);
            else h.set(num, h.get(num) + 1);
        }

        // use heap to sort map item

        // num,cnt

        class MaxHeap {
            constructor() {
                this.data = [null];
                this.cmp = (a, b) => this.data[a][1] > this.data[b][1];
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
                while(idx*2<this.data.length){
                    let leftIdx = idx *2, rightIdx = leftIdx+1;
                    let tmp = idx;
                    if(this.cmp(leftIdx,tmp)) tmp = leftIdx;
                    if(rightIdx < this.data.length && this.cmp(rightIdx, tmp)) tmp = rightIdx;
                    if(tmp === idx) break;
                    else {
                        this.swap(idx, tmp);
                        idx = tmp;
                    }
                }
            }
        }

        const mh = new MaxHeap();

        for(let [num, cnt] of h){
            mh.insert([num, cnt]);
        }

        const ans = [];
        let curCnt = 0;

        while(ans.length < k) {
            const ret = mh.remove()[0]
            ans.push(ret);
        }

        return ans;
    }
}
