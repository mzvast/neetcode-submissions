class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        // toposort

        if (edges.length !== n - 1) return false;

        const g = Array.from({ length: n }, () => []); // to other point

        for (let [from, to] of edges) {
            g[from].push(to);
            g[to].push(from);
        }

        let sorted = 0;
        const visited = Array(n).fill(false);

        const q = [0];

        while (q.length) {
            const cur = q.shift();
            sorted += 1;
            if (!visited[cur]) visited[cur] = true;

            for (let to of g[cur]) {
                if (visited[to]) continue;
                q.push(to);
            }
        }

        return sorted === n;
    }
}
