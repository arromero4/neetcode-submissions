class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let mapRes = {}
        
        for(let s of strs){
            let count: number[] = Array(26).fill(0)
            for(let c of s){
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }
            const key = count.join(',')
            if(!mapRes[key]){
                mapRes[key] = []
            }
            mapRes[key].push(s)
        }
        return Object.values(mapRes)
    }
}
