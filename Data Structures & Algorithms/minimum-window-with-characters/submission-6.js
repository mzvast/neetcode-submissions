class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const need = {},
            win = {};

        let l = 0,
            r = 0;

        for (let x of t) {
            need[x] = (need[x] || 0) + 1;
        }

        let needCnt = Object.keys(need).length;

        let ans = "";

        while (r < s.length) {
            const toAdd = s[r++];

            win[toAdd] = (win[toAdd] || 0) + 1;

            if (win[toAdd] === need[toAdd]) needCnt -= 1;

            while (needCnt === 0) {
                // update ans
                if (ans === "" || r - l < ans.length) ans = s.slice(l, r);

                const toDel = s[l++];
                win[toDel] -= 1;
                if (win[toDel] === need[toDel] - 1) needCnt += 1;
            }
        }

        return ans;
    }
}
