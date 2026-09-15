class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        // dp[i] := nums[i]结尾 的LIS 长度
        // dp[i] = max{dp[j]} + 1 if nums[i]>nums[j] and j<i
        // ans = max{dp[i]}

        const n = nums.length,
            dp = Array(n).fill(1);

        let ans = 1;

        for (let i = 1; i < n; i++) {
            for (let j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                    if(dp[i]>ans) ans = dp[i];
                }
            }
        }

        return ans;
    }
}
