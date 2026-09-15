class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        // dp[i] := 构成i的最少硬币数
        // dp[i] = min{dp[i-coin] for coin in coins } +1
        // ans = dp[amount]

        const dp = Array(amount + 1).fill(Infinity);
        dp[0] = 0;

        for (let i = 1; i <= amount; i++) {
            for (let coin of coins) {
                if (i - coin < 0) continue;
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }

        if (Number.isFinite(dp[amount])) return dp[amount];
        return -1;
    }
}
