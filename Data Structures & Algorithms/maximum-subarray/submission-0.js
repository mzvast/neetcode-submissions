class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        // dp[i] := 第i个元素结尾的MS
        // dp[i] = if dp[i-1]<=0  then nums[i-1]
        //                      then dp[i-1] + nums[i-1]
        // ans = max{dp[i]}

        const n = nums.length,
            dp = Array(n + 1).fill(0);

        let ans = nums[0];

        for (let i = 1; i <= n; i++) {
            if (dp[i - 1] <= 0) {
                dp[i] = nums[i - 1];
            } else {
                dp[i] = dp[i - 1] + nums[i - 1];
            }

            if(dp[i]>ans) ans = dp[i];
        }

        return ans;
    }
}
