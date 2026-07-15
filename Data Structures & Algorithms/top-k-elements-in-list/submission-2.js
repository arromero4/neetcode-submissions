class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = new Map()
        for(let i=0; i < nums.length; i++){
            freq.set(nums[i], (freq.get(nums[i]) || 0) + 1)
        }
        let arr = Array.from(freq.entries()).map(([num, count]) => [count, num])
        arr.sort((a, b) => b[0] - a[0])
        
        return arr.slice(0, k).map((pair) => pair[1])
    }
}
