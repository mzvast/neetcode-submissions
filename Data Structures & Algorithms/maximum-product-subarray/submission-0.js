class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        // dp[i][1] := 乘到第i个数最大的结果
        // dp[i][0] := 乘到第i个数最小的结果
        // dp[i][1] = max{nums[i], dp[i-1][0] * nums[i], dp[i-1][1] * nums[i]}
        // ans = max{dp[i][1]}

        const n = nums.length;
        const dp = Array.from({ length: n }, () => [Infinity, -Infinity]);
        dp[0][0] = nums[0];
        dp[0][1] = nums[0];

        let ans = dp[0][1];

        for (let i = 1; i < n; i++) {
            dp[i][0] = Math.min(nums[i], dp[i - 1][0] * nums[i], dp[i - 1][1] * nums[i]);
            dp[i][1] = Math.max(nums[i], dp[i - 1][0] * nums[i], dp[i - 1][1] * nums[i]);
            ans = Math.max(ans, dp[i][1]);
        }

        return ans;
    }
}
