class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0
        for(let left = 0; i < heights.length;left++){
            for(let rigth = left + 1; rigth < heights.length;rigth++){
                let area = Math.max(res, Math.min(heigths[left],heights[rigth])) (rigth-left)
            }

        }
    }
}
