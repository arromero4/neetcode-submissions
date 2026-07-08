class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = new Map()
        for(let s of strs){
            let count = Array(26).fill(0)
            for(let c of s){
                let index = c.charCodeAt(0) - "a".charCodeAt(0)
                count[index]++
            }
            let key = count.join(",")
            if(!res.has(key)){
                res.set(key, [])
            }
            res.get(key).push(s)
        }
        
        return Array.from(res.values())
    }
}
