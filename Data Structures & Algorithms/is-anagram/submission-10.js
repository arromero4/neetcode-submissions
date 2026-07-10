class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let countS = new Map()
        let countT= new Map()

        if (s.length !== t.length) return false

        for(let i = 0; i < s.length; i++){
            countS.set(s[i], (countS.get(s[i]) || 0) + 1)
            countT.set(t[i], (countT.get(t[i]) || 0) + 1)
        }

        for(let [key, value] of countS){
            if(countS.get(key) !== countT.get(key)){
                return false
            }
        }

        return true

    }
}
