class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let left:number = 0
        let res:number = 0
        const charSet:Set<string> = new Set()

        for(let right = 0; right < s.length; right++){
            while(charSet.has(s[right])){
                charSet.delete(s[left])
                left++
            }
            charSet.add(s[right])
            let longActual:number = right - left + 1
            res = Math.max(res, longActual)

        }
        return res
    }
}
