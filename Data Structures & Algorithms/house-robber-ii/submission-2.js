class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        // 第一个最后不能同时选
        // dp[i] := 抢到第i间的最大收益
        // dp[i] = max{dp[i-2]+ nums[i-1], dp[i-1]}
        // ans = max{去掉第一间、去掉最后一间}

        const n = nums.length;

        const dp = Array(n + 1).fill(0);

        // not 1st. one

        dp[1] = 0;

        for (let i = 2; i <= n; i++) {
            dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1]);
        }

        const ans1 = dp[n];

        // not last one
        dp[1] = nums[0];

        for (let i = 2; i < n; i++) {
            dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1]);
        }

        if (n >= 2) {
            return Math.max(ans1, dp[n - 1]);
        }

        return nums[0];
    }
}
