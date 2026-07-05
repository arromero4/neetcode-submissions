class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let mapS = {}
        let mapT = {}
        if(s.length !== t.length) return false

        for(let i = 0; i < t.length;i++){
            mapS[s[i]] = ( mapS[s[i]] || 0) + 1
            mapT[t[i]] = ( mapT[t[i]] || 0) + 1
        }

        for(let i in mapS){
            if(mapS[i] !== mapT[i]){
                return false
            }
        }
        return true



        
    }
}
