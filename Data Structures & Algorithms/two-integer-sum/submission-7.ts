class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let mapNumbers = new Map()

        for(let i = 0; i < nums.length;i++){
            let difference = target - nums[i]
            if(mapNumbers.has(difference)){
                return [mapNumbers.get(difference), i]
            }
            mapNumbers.set(nums[i],i)
        }
        
        
        return []
    }
}
