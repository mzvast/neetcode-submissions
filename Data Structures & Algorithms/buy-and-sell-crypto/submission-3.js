class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const n = prices.length;

        let maxProfit = 0;

        let lastSeenMin = prices[0];

        for(let i=1;i<n;i++){
            const profit = prices[i] - lastSeenMin;
            maxProfit = Math.max(maxProfit, profit);
            lastSeenMin = Math.min(lastSeenMin,prices[i]);
        }


        return maxProfit;
    }
}
