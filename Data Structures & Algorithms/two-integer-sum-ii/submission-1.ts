class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let left = 0, right = numbers.length - 1;
        while( left < right){
            let currSum = numbers[left] + numbers[right]
            if(currSum > target){
                right--
            }else if(currSum < target){
                left++
            }else{
                return [left + 1, right + 1]
            }
        }
        return []
    }
}
