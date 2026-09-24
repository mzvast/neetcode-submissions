class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const n = prices.length;

        let maxProfit = 0;

        for(let i=0;i<n-1;i++){
            for(let j=i+1;j<n;j++){
                const profit = prices[j] - prices[i];
                maxProfit = Math.max(maxProfit,profit);
            }
        }


        return maxProfit;
    }
}
