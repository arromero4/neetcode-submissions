class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0;
        let right = s.length - 1

        while(left < right){
            while(left < right && !this.isAlpha(s[left])){
                left++
            }

            while(right > left && !this.isAlpha(s[right])){
                right--
            }

            if(s[left].toLowerCase() !== s[right].toLowerCase()){
                return false
            }
            left++
            right--
        }
        return true
    }

    isAlpha(char: string): boolean{
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        )
    }
}
