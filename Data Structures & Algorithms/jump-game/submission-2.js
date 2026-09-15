class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        // dp[i] := 能否从起点到达下标i
        // dp[i] = dp[j]===true && j + nums[j]>=i
        // ans = dp[n-1]
        const n = nums.length;
        const dp = Array(n).fill(false);
        dp[0] = true;

        for (let i = 1; i < n; i++) {
            for (let j = 0; j < i; j++) {
                if (dp[j] && j + nums[j] >= i) {
                    dp[i] = true;
                    break;
                }
            }
        }

        return dp[n-1];
    }
}
