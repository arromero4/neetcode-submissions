class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const mapS = new Map()
        const mapT = new Map()

        if(s.length !== t.length) return false

        for(let i = 0; i < s.length; i++){
            mapS[s[i]] = (mapS[s[i]] || 0) + 1
            mapT[t[i]] = (mapT[t[i]] || 0) + 1
        }

        for(let s in mapS){
            if(mapS[s] !== mapT[s]){
                return false
            }
        }
        return true
    }
}
