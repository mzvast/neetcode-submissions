class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        // 开始几次count

        const g = Array.from({ length: n }, () => []);
        const visited = Array(n).fill(false)

        for (let [a, b] of edges) {
            g[a].push(b);
            g[b].push(a);
        }
        // visited[0] = true;

        let cnt = 0;

        for(let i=0;i<n;i++){
            if(visited[i]) continue;
            cnt+=1;
            // BFS
            visited[i] = true;
            const q = [i]
            while(q.length){
                const cur = q.shift();
                for(let to of g[cur]){
                    if(visited[to]) continue;
                    visited[to] = true;
                    q.push(to);
                }
            }
            
        }

        return cnt;
    }
}
