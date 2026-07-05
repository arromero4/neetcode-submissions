class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanS = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
        let left = 0
        let rigth = cleanS.length - 1
        
        console.log(cleanS)
        while(left < rigth){
            if(cleanS[left] !== cleanS[rigth]) return false
            left++
            rigth--
        }
        return true
    }
}
