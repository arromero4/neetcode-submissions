class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let rigth = heights.length - 1
        let res = 0
        // for(let left = 0; left < heights.length;left++){
        //     for(let rigth = left + 1; rigth < heights.length;rigth++){
        //         res = Math.max(res, Math.min(heights[left],heights[rigth]) *(rigth-left))

        //     }

        // }
        while (left < rigth) {
            const area = Math.min(heights[left], heights[rigth]) * (rigth - left)
            res = Math.max(res, area)
            if (heights[left] <= heights[rigth]) {
                left++
            } else {
                rigth--
            }
        }

        return res

    }
}
