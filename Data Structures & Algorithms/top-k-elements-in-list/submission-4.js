class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // count in map
        // sort in bulk sort

        const h = new Map();

        for (let num of nums) {
            if (!h.has(num)) h.set(num, 1);
            else h.set(num, h.get(num) + 1);
        }

        const arr = Array.from({ length: nums.length + 1 }, () => []);

        // [], [], []
        // 0    1   2

        for(let [num, cnt] of h) {
            arr[cnt].push(num)
        }

        // get result

        const ans = [];

        let cur = nums.length
        while(ans.length < k && cur >= 0) {
            if(arr[cur].length > 0){
                ans.push(...arr[cur])
            }
            cur -=1
        }

        return ans;
    }
}
