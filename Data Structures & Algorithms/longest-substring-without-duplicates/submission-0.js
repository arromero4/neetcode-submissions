class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let charSet = new Set()
        let left = 0
        let res = 0
        //s="abcabcb b"
        //  s[r]= s[7] = b
        for(let r = 0; r < s.length; r++){
            while(charSet.has(s[r])){
                charSet.delete(s[left]) //s[left] = s[4]  = a
                left++ // left = 4 + 1 = 5
            }
            charSet.add(s[r]) // { 'b' }


            console.log(charSet)
            res = Math.max(res, r-left + 1) 
                        // 3, 7 - 5 + 1 = 3
            //res = 3

        }
        return res
    }
}
