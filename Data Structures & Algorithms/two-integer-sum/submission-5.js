class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsMap = new Map()

        for(let i = 0; i < nums.length; i++){
            let difference = target - nums[i]
            if(numsMap.has(difference)){
                return [numsMap.get(difference),i]   
            }
            numsMap.set(nums[i],i)
        } 
        return []
    }
}
