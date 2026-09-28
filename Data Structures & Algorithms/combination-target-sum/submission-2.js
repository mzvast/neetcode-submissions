class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const n = nums.length,
            ans = [];

        function bt(path, idx, sum) {
            if (sum > target) return;
            if (sum === target) {
                ans.push(path.slice());
                return;
            }
            for (let i = idx; i < n; i++) {
                path.push(nums[i]);
                bt(path, i, sum + nums[i]);
                path.pop();
            }
        }

        bt([], 0, 0);
        return ans;
    }
}
