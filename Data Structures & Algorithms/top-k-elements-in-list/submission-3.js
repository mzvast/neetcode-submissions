class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // freq =>[x,y]
        const bulk = Array.from({ length: nums.length + 1 }, () => []);

        // map num=>cnt;
        const h = new Map();

        for (let num of nums) {
            if (!h.has(num)) h.set(num, 1);
            else h.set(num, 1 + h.get(num));
        }

        // console.log('h:',h)

        for (let [num, cnt] of h) {
            bulk[cnt].push(num);
        }

        // console.log('bulk:',bulk)

        const ans = [];
        // let cnt = k;

        for (let i = bulk.length - 1; i >= 0; i -= 1) {
            if (ans.length >= k ) break;
            if (bulk[i].length === 0) continue;
            ans.push(...bulk[i]);
            // cnt -= 1;
        }

        return ans;
    }
}
