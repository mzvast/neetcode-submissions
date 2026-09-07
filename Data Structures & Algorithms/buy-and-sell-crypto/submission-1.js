class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let lowestSeen = prices[0]

        for (let i = 1; i < prices.length; i++) {
           maxProfit = Math.max(maxProfit, prices[i] - lowestSeen);
           lowestSeen = Math.min(lowestSeen, prices[i]);
        }

        return maxProfit;
    }
}
