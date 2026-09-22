class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let mapNums = new Map()
        for(let i = 0; i < nums.length; i++){
            let difference = target - nums[i]
            if(mapNums.has(difference)){
                return [mapNums.get(difference), i]
            }
            mapNums.set(nums[i] , i)
        }
        return []
    }
}
