class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const g = Array.from({ length: n }, () => []);
        const visited = Array(n).fill(false);

        for (let [a, b] of edges) {
            g[a].push(b);
            g[b].push(a);
        }

        let cnt = 0;


        for (let i = 0; i < n; i++) {
            if (visited[i]) continue;
            
            cnt += 1;
            // BFS
            const q = [i];
            visited[i] = true; // mark on enqueue
            while (q.length) {
                const cur = q.shift();
                for (let to of g[cur]) {
                    if (visited[to]) continue;
                    q.push(to);
                    
                    visited[to] = true;
                }
            }
        }

        return cnt;
    }
}
