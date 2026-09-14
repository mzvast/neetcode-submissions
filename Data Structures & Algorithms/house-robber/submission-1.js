class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        // dp[i] := 抢到第i间的最大收益
        // dp[i] = max{ dp[i-2] + nums[i-1], dp[i-1]}
        // ans =

        const dp = Array(nums.length + 1).fill(0);
        dp[0] = 0;
        dp[1] = nums[0];

        let ans = dp[1];

        for (let i = 2; i <= nums.length; i++) {
            dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1]);
            ans = Math.max(ans, dp[i]);
        }

        return ans;
    }
}
