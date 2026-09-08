class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const need = {},
            win = {};
        let needCnt = 0;
        for (let c of t) {
            if (!need[c]) {
                need[c] = 1;
                needCnt += 1;
            } else need[c] += 1;
        }

        // sliding minWindow

        let l = 0,
            r = 0;

        let ans = "";

        while (r < s.length) {
            const toAdd = s[r++];
            if (!win[toAdd]) win[toAdd] = 1;
            else win[toAdd] += 1;

            if (win[toAdd] === need[toAdd]) needCnt -= 1;

            // shrink
            while (needCnt === 0 && l < r) {
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
