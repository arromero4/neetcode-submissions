class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        // check rows
        for(let row=0; row < 9; row++){
            let seen = new Set();
            for(let col = 0; col < 9; col++){
                if(board[row][col] === '.') continue
                if(seen.has(board[row][col])) return false
                seen.add(board[row][col])
            }
        }
        // check columns
        for(let col=0; col < 9; col++){
            let seen = new Set();
            for(let row = 0; row < 9; row++){
                if(board[col][row] === '.') continue
                if(seen.has(board[col][row])) return false
                seen.add(board[col][row])
            }
        }

        // check subgrids
        for(let square = 0; square < 9; square++){
            console.log("square: " +square)
            let seen = new Set()
            for(let i = 0; i < 3;i++){
                for(let j=0; j < 3; j++){
                    let row = Math.floor(square / 3) * 3 + i
                    let col = (square % 3) * 3 + j
                    console.log("row: " +row)
                    console.log("col: " +col)
                    console.log("*************")
                    if(board[row][col] === '.') continue
                    if(seen.has(board[row][col])) return false
                    seen.add(board[row][col])
                }
            }
        }
        return true
    }
}
