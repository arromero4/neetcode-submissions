class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0
        let rigth = 1
        //left is buy
        //rigth is sell
        let maxP = 0
        while(rigth < prices.length){
            if(prices[left] < prices[rigth]){
                let profit =  prices[rigth] - prices[left]
                maxP = Math.max(maxP, profit)
            }else{
                left = rigth
            }
            rigth++
        }
        return maxP
    }
}
