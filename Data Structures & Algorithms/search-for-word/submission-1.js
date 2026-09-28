class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const m = board.length,
            n = board[0].length,
            visited = Array.from({ length: m }, () => Array(n).fill(false));

            let ans = false;

        function bt(i, j, idx) {
            if(ans) return;
            if(idx===word.length){
                ans = true;
                return;
            }
            if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j] || board[i][j] !== word[idx])
                return;
                visited[i][j] = true;

                bt(i+1,j,idx+1);
                bt(i-1,j,idx+1);
                bt(i,j+1,idx+1);
                bt(i,j-1,idx+1);

                visited[i][j] = false;
        }
        

        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                bt(i,j,0);
                if(ans) return true;
            }
        }

        return false;
    }
}
