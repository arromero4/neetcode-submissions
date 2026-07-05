class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashNums = new Map()
        for(let i = 0;i < nums.length;i++){
            let difference = target - nums[i]

            if(hashNums.has(difference)){
               return [hashNums.get(difference), i]
            }
            hashNums.set(nums[i], i)
        }
          
        console.log(hashNums)

        return []
    }
}
