class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        // dp[i] := 以第i个字符结尾的LIS
        // dp[i] = max{dp[j]+1}  for 0<j<i and nums[j]<nums[i]
        // ans = max{dp[i]}

        const n = nums.length;

        const dp = Array(n).fill(1);

        let ans = 1;

        for (let i = 1; i < n; i++) {
            for (let j = 0; j < i; j++) {
                if (nums[j] < nums[i]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
            ans = Math.max(ans, dp[i]);
        }

        return ans;
    }
}
