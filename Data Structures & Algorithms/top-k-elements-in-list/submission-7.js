class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const n = nums.length;
        const bucket = Array.from({ length: n + 1 }, () => []);

        const h = new Map(); // num=>cnt

        for (let num of nums) {
            if (!h.has(num)) h.set(num, 1);
            else h.set(num, h.get(num) + 1);
        }

        for (let [num, cnt] of h) {
            bucket[cnt].push(num);
        }

        const ans = [];

        for (let i = n; i >= 0; i--) {
            if (ans.length >= k) break;
            if (bucket[i].length) ans.push(...bucket[i]);
        }

        return ans;
    }
}
