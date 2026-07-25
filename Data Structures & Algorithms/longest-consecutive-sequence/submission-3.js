class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numsSet = new Set(nums)
        let longest = 0
        for(let n of nums){
            if(!numsSet.has(n - 1)){
                let length = 1
                while(numsSet.has(n + length)){
                    length++
                }
                longest = Math.max(longest, length)
            }
        }
        return longest
    }
}
