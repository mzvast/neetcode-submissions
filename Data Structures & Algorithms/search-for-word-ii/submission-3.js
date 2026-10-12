class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const m = board.length, n = board[0].length;
        const h = new Trie();
        const visited = Array.from({length:m},()=>Array(n).fill(false))

        for(let word of words) h.insert(word);

        const ans = new Set()

        function dfs(node,i,j){
            if(node.word) ans.add(node.word);
            if(i<0||i>=m||j<0||j>=n || visited[i][j]||!node.next[board[i][j]]) return;

            visited[i][j] = true;

            dfs(node.next[board[i][j]],i+1,j)
            dfs(node.next[board[i][j]],i-1,j)
            dfs(node.next[board[i][j]],i,j+1)
            dfs(node.next[board[i][j]],i,j-1)

            visited[i][j] = false;

        }

        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                dfs(h.root,i,j);
            }
        }

        return Array.from(ans);
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let p = this.root;
        for(let x of word){
            if(!p.next[x]) p.next[x] = new Node();
            p = p.next[x]
        }
        p.word = word;
    }
}

class Node{
    constructor(){
        this.next = {};
        this.word = null;
    }
}