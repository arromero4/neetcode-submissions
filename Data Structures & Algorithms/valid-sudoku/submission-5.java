class Solution {
    public boolean isValidSudoku(char[][] board) {

        //row
        for(int row = 0; row < 9; row++){
            Set<Character> seen = new HashSet<>();
            for(int i = 0; i < 9; i++){
                if(board[row][i] == '.') continue;
                if(seen.contains(board[row][i])) return false;
                seen.add(board[row][i]);
            }
        }

        //column
          for(int col = 0; col < 9; col++){
            Set<Character> seen = new HashSet<>();
            for(int i = 0; i < 9; i++){
                if(board[i][col] == '.') continue;
                if(seen.contains(board[i][col])) return false;

                seen.add(board[i][col]);
            }

        }

        //subgrids
        for(int subgrid = 0; subgrid < 9; subgrid++){
            Set<Character> seen = new HashSet<>();
            for(int i = 0; i < 3; i++){
                for(int j = 0; j < 3; j++){
                    int row = (subgrid / 3 ) * 3 + i;
                    int col = (subgrid % 3) * 3 + j;
                    if(board[row][col] == '.') continue;
                    if(seen.contains(board[row][col])) return false;
                    seen.add(board[row][col]);
                    
                }
            }
            
        }      
        return true;
    }
}
