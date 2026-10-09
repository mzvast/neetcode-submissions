class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let loweset = prices[0];
        let maxProfit = 0;

        for(let i=1;i<prices.length;i++){
            const profit = prices[i] - loweset
            maxProfit = Math.max(maxProfit,profit);
            loweset = Math.min(loweset,prices[i])
        }

        return maxProfit
    }
}
