class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0
        let rigth = numbers.length - 1
        while(left < rigth){
            let currSum = numbers[left] + numbers[rigth]
            if(currSum > target) rigth--
            else if( currSum < target) left++
            else return[left + 1, rigth + 1]
        }

        return []
    }
}
