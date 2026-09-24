class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const seen = new Set()
        for(let s of nums){
            if(seen.has(s)){
                return true
            }
            seen.add(s)
        }
        return false
    }
}
