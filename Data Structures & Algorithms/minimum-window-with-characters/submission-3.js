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

        // let ans = "";
        let startIdx = 0,
            len = 0;

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
                if (len === 0 || r - l < len) {
                    startIdx = l;
                    len = r - l;
                }

                const toDel = s[l++];
                win[toDel] -= 1;
                if (win[toDel] === need[toDel] - 1) needCnt += 1;
            }
        }

        if (len > 0) return s.slice(startIdx, startIdx + len);
        return ""
        // return ans;
    }
}
