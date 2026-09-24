class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const n = s.length;

        const need = {},
            win = {};

        for (let x of t) {
            if (!need[x]) need[x] = 1;
            else need[x] += 1;
        }

        let needCnt = Object.keys(need).length;

        let l = 0,
            r = 0,
            ans = "";

        while (r < n) {
            const toAdd = s[r++];
            if (!win[toAdd]) win[toAdd] = 1;
            else win[toAdd] += 1;

            if (need[toAdd] === win[toAdd]) needCnt -= 1;

            while (needCnt === 0) {
                // update ans
                if (ans === "" || r - l < ans.length) {
                    ans = s.slice(l, r);
                }
                const toDel = s[l++];
                win[toDel] -= 1;
                if (win[toDel] === need[toDel] - 1) needCnt += 1;
            }
        }

        return ans;
    }
}
