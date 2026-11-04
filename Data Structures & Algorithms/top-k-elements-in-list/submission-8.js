class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // count in dict
        // sort in bulk

        const h = new Map(); // num->cnt

        for (let num of nums) {
            if (!h.has(num)) h.set(num, 1);
            else {
                h.set(num, h.get(num) + 1);
            }
        }

        const arr = Array.from({ length: nums.length + 1 }, () => []);

        for (let [num, cnt] of h) {
            arr[cnt].push(num);
        }

        const ans = [];

        for (let i = arr.length - 1; i >= 0; i--) {
            if (ans.length >= k) break;
            if (arr[i].length === 0) continue;
            ans.push(...arr[i]);
        }

        return ans;
    }
}
