class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (n - 1 !== edges.length) return false;

        const visited = Array(n).fill(false)

        let visitedCnt = 0

        const g = Array.from({length:n},()=>[])
        
        for(let [from,to] of edges){
            // 双向
            g[from].push(to);
            g[to].push(from);
        }

        const q = [0];
        visited[0] = true;

        while(q.length){
            const cur = q.shift();
            visitedCnt +=1;

            for(let x of g[cur]){
                if(visited[x]) continue;
                visited[x] = true;
                q.push(x)
            }
        }


        return visitedCnt === n;
    }
}
