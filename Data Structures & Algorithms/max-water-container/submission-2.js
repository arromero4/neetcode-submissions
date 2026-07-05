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

        // }   4       5
        while (left < rigth) {
            //                           4            7              5-4 = 1
            const area = Math.min(heights[left], heights[rigth]) * (rigth - left)
            res = Math.max(res, area)//0-> 7 -> 36 
             //       4             7 
            if (heights[left] <= heights[rigth]) {
                left++ // 0 -> 1 -> 2 -> 3 -> 4 -> 5
            } else {
                rigth-- // 7 -> 6 -> 5
            }
        }

        return res // 36

    }
}
