class WordDictionary {
    constructor() {
        this.root = new Node()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let p = this.root;
        for(let c of word){
            if(!p.next[c]) p.next[c] = new Node();
            p = p.next[c]
        }
        p.word = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        // 当前node开始匹配idx到结尾
        function dfs(node,idx){
            if(idx === word.length) return node.word

            const char=word[idx];

            if(char==='.'){
                // traverse
                for(let k in node.next){
                    if(dfs(node.next[k],idx+1)) return true;
                }
                return false;
            }else {
                if(!node.next[char]) return false;
                return dfs(node.next[char],idx+1);
            }
        }

        return dfs(this.root,0)
    }
}
class Node{
    constructor(){
        this.next = {}
        this.word = false;
    }
}