class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
          // Sort the array numerically
  nums.sort((a, b) => a - b);
        let res = []
        
        for(let i = 0; i < nums.length;i++){
            if(i > 0 && nums[i] === nums[i-1]) continue

            let left = i + 1
            let rigth = nums.length - 1

            while(left < rigth){
                let threeSum = nums[i] + nums[left] + nums[rigth]
                if(threeSum > 0) rigth--
                else if(threeSum < 0) left++
                else{
                    res.push([nums[i],nums[left], nums[rigth]])
                    left++

                    while(nums[left] === nums[left-1] && left < rigth){
                        left++
                    }
                }
            }
        }
        return res
    }
}
