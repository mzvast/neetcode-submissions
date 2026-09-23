class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // bucket sort

        // cnt->[num]
        const arr = Array.from({ length: nums.length + 1 }, () => []);

        const h = new Map();

        for (let num of nums) {
            if (!h.has(num)) h.set(num, 1);
            else h.set(num, h.get(num) + 1);
        }

        for (let [num, cnt] of h) {
            arr[cnt].push(num);
        }

        const ans = [];

        for (let i = nums.length ; i >= 0; i--) {
            if (ans.length >= k) return ans;
            if (arr[i].length === 0) continue;
            ans.push(...arr[i]);
        }

        return ans;
    }
}
