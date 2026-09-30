class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        // 检查边的数量
        // 检查双向链接，每个都有一次链接
        if(n-1 !== edges.length) return false;

        const g = Array.from({length:n},()=>[]);

        for(let [a,b] of edges){
            g[a].push(b);
            g[b].push(a);
        }

        const visited = Array(n).fill(false);
        visited[0] = true;
        const q = [0] ;// BFS
        let sorted = 0;

        while(q.length){
            const cur= q.shift();
            sorted+=1;
            for(let x of g[cur]){
                if(visited[x]) continue;
                visited[x] = true;
                q.push(x);
            }
            
        }

        return sorted === n
    }
}
