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

        for (let x of t) {
            if (!need[x]) {
                need[x] = 1;
                needCnt += 1;
            } else need[x] += 1;
        }

        console.log("need:", need);

        let ans = "";

        let l = 0,
            r = 0;
        while (r < s.length) {
            const toAdd = s[r++];

            if (!win[toAdd]) {
                win[toAdd] = 1;
            } else win[toAdd] += 1;

            if (win[toAdd] === need[toAdd]) needCnt -= 1;

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
